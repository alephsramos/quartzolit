const gliderElement = document.querySelector('.glider');
const glider = new Glider(gliderElement, {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  dots: '.dots',
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

// Intervalo de 3 segundos para avançar o slide automaticamente
setInterval(advanceSlide, 5000); // Ajuste o tempo conforme necessário
