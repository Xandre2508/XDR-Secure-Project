from django.shortcuts import render
from django.contrib.auth import get_user_model
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth.hashers import make_password
import json

User = get_user_model()

@csrf_exempt # Apenas para testes, não use em produção!
def register_user(request):
    if request.method == 'POST':
        data = json.loads(request.body)
        username = data.get('username')
        email = data.get('email')
        password = data.get('password')
        confirm_password = data.get('confirm_password')

        if password != confirm_password:
            return JsonResponse({'message': 'As senhas não coincidem.'}, status=400)

        try:
            # O Django já cuida da criptografia
            User.objects.create_user(username=username, email=email, password=password)
            return JsonResponse({'message': 'Conta criada com sucesso!'}, status=201)
        except Exception as e:
            # O Django já cuida de erros de usuários duplicados
            return JsonResponse({'message': 'Usuário ou e-mail já existe.'}, status=409)

    return JsonResponse({'message': 'Método não permitido.'}, status=405)