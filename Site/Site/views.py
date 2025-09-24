from django.shortcuts import render

def index(request):
    return render(request, 'index.html')

def login(request):
    return render(request, 'Login.html')

def create_acc(request):
    return render(request, 'CreateACC.html')