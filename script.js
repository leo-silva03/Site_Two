const carousel = document.getElementById('carousel');
const dots = document.querySelectorAll('.dot');

// Função para atualizar os indicadores (dots)
function updateDots() {
    const cardWidth = carousel.scrollWidth / dots.length;
    const index = Math.round(carousel.scrollLeft / cardWidth);
    dots.forEach(dot => dot.classList.remove('active'));
    if (dots[index]) dots[index].classList.add('active');
}

// Evento de rolagem (scroll) para atualizar os indicadores
carousel.addEventListener('scroll', updateDots);

// Suporte para toque (touch) em dispositivos móveis
let startX = 0;
let scrollLeft = 0;

carousel.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX;
    scrollLeft = carousel.scrollLeft;
});

carousel.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX;
    const walk = startX - x; // Distância percorrida
    carousel.scrollLeft = scrollLeft + walk;
});