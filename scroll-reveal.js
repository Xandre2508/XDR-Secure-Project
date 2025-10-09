// Este script deve ser guardado num novo ficheiro chamado scroll-reveal.js

// A função que define a animação de Anime.js
function animateElement(element) {
    
    // Obter o atraso (delay) do atributo 'data-delay' se existir, caso contrário, 0.
    const delay = parseInt(element.getAttribute('data-delay')) || 0;

    anime({
        targets: element,
        // Efeito de subir e aparecer
        translateY: [20, 0], // Começa 20px abaixo e sobe para a posição 0
        opacity: [0, 1],     // Começa invisível (0) e fica visível (1)
        duration: 800,       // Duração de 0.8 segundos
        delay: delay,        // Aplica o atraso
        easing: 'easeOutQuad'
    });
}

// Lógica de Scroll Reveal usando Intersection Observer
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. Selecionar todos os elementos que devem ser animados
    // Usamos a classe 'js-scroll-reveal'
    const elementsToAnimate = document.querySelectorAll('.js-scroll-reveal');

    // 2. Definir as opções do observador
    const options = {
        root: null, // usa a viewport (janela do navegador)
        rootMargin: '0px',
        threshold: 0.1 // A animação dispara quando 10% do elemento está visível
    };

    // 3. Função de callback
    const observerCallback = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Se o elemento entrou na viewport, anime-o!
                animateElement(entry.target);
                
                // Parar de observar depois de animar (otimiza o desempenho)
                observer.unobserve(entry.target); 
            }
        });
    };

    // 4. Criar e iniciar o observador em todos os elementos
    const observer = new IntersectionObserver(observerCallback, options);

    elementsToAnimate.forEach(element => {
        observer.observe(element);
    });
});