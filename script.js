let currentIndex = 0;
const slides = document.querySelector('.carousel-slides');
const dots = document.querySelectorAll('.dot');
const totalSlides = document.querySelectorAll('.carousel-slide').length;

function moveToSlide(index) {
  if (index < 0 || index >= totalSlides) return; // Verifica se o índice está dentro do intervalo

  currentIndex = index;
  const offset = -currentIndex * 100; // Calcula o deslocamento necessário
  slides.style.transform = `translateX(${offset}%)`; // Move os slides
  updateDots(); // Atualiza os pontos de navegação
}

function updateDots() {
  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex); // Atualiza a classe ativa dos pontos
  });
}

// Inicializa a navegação com o ponto ativo
updateDots();

// Adiciona ouvintes de eventos para os pontos de navegação
dots.forEach((dot, index) => {
  dot.addEventListener('click', () => moveToSlide(index));
});
