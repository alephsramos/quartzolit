const gliderElement = document.querySelector('.glider');
const glider = new Glider(gliderElement, {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  dots: '.dots',
});

let isDragging = false; // Variável para verificar se está arrastando
let startX; // Posição inicial do mouse

// Adiciona os eventos de mousedown, mousemove e mouseup para detectar o arrasto
gliderElement.addEventListener('mousedown', (e) => {
  isDragging = false;
  startX = e.pageX;
});

gliderElement.addEventListener('mousemove', (e) => {
  if (e.pageX !== startX) {
    isDragging = true; // Se houver movimento, está arrastando
  }
});

gliderElement.addEventListener('mouseup', () => {
  setTimeout(() => {
    isDragging = false; // Reseta a variável após um tempo
  }, 50); // Pequeno delay para garantir que o clique seja tratado corretamente
});

// Adiciona um listener aos links para prevenir o clique durante o arrasto
const links = gliderElement.querySelectorAll('a');
links.forEach(link => {
  link.addEventListener('click', (e) => {
    if (isDragging) {
      e.preventDefault(); // Previne o clique se estiver arrastando
    }
  });
});

function advanceSlide() {
  // Obtém o número total de slides
  const totalSlides = gliderElement.querySelectorAll('.glider-slide').length;

  // Obtém o índice do slide atual
  const scrollPosition = gliderElement.scrollLeft;
  const slideWidth = gliderElement.clientWidth;
  const currentSlide = Math.round(scrollPosition / slideWidth);

  // Calcula o próximo slide
  const nextSlide = (currentSlide + 1) % totalSlides;

  // Avançar para o próximo slide
  glider.scrollItem(nextSlide, true);
}

// Intervalo de 5 segundos para avançar o slide automaticamente
setInterval(advanceSlide, 5000); // Ajuste o tempo conforme necessário
