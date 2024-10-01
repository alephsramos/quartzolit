// Seleciona o elemento do carrossel
const gliderElement = document.querySelector('.glider');
const glider = new Glider(gliderElement, {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  dots: '.dots',
});

// Variáveis para arrasto
let isDragging = false;
let clickPrevented = false;
let startX, currentX;

// Detecta quando o mouse ou o toque inicia
const startDrag = (e) => {
  isDragging = false;
  clickPrevented = false;
  startX = e.type === 'touchstart' ? e.touches[0].pageX : e.pageX;
};

// Detecta movimento para identificar arrasto
const dragMove = (e) => {
  currentX = e.type === 'touchmove' ? e.touches[0].pageX : e.pageX;
  if (Math.abs(currentX - startX) > 10) {
    isDragging = true;
  }
};

// Finaliza o arrasto e verifica se o clique deve ser prevenido
const endDrag = () => {
  if (isDragging) {
    clickPrevented = true; // Define que o clique deve ser prevenido
  }
  isDragging = false;
};

// Adiciona eventos de arrasto ao carrossel
const addDragEvents = (element) => {
  element.addEventListener('mousedown', startDrag);
  element.addEventListener('mousemove', dragMove);
  element.addEventListener('mouseup', endDrag);

  element.addEventListener('touchstart', startDrag);
  element.addEventListener('touchmove', dragMove);
  element.addEventListener('touchend', endDrag);
};

addDragEvents(gliderElement);

// Previne o clique nos links se houver arrasto
gliderElement.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', (e) => {
    if (clickPrevented) {
      e.preventDefault(); // Previne o clique se foi arrastado
    } else {
      window.location.href = link.href; // Executa a navegação
    }
    clickPrevented = false; // Reseta para o próximo clique
  });
});

// Função para avançar slides automaticamente
function advanceSlide() {
  const totalSlides = gliderElement.querySelectorAll('.glider-slide').length;
  const scrollPosition = gliderElement.scrollLeft;
  const slideWidth = gliderElement.clientWidth;
  const currentSlide = Math.round(scrollPosition / slideWidth);
  
  // Verifica se está no último slide e volta para o primeiro
  const nextSlide = (currentSlide + 1 >= totalSlides) ? 0 : currentSlide + 1;

  glider.scrollItem(nextSlide, true);
}

// Avança o slide automaticamente a cada 5 segundos
setInterval(advanceSlide, 5000);
