// Carrossel para desktop
const gliderElementDesktop = document.querySelector('.desktop-carousel .glider');
const gliderDesktop = new Glider(gliderElementDesktop, {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  dots: '.desktop-carousel .dots',
});

// Carrossel para mobile
const gliderElementMobile = document.querySelector('.mobile-carousel .glider');
const gliderMobile = new Glider(gliderElementMobile, {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  dots: '.mobile-carousel .dots',
});

let isDragging = false;
let clickPrevented = false;
let startX, currentX;

// Funções de arrasto
const startDrag = (e) => {
  isDragging = false;
  clickPrevented = false;
  startX = e.type === 'touchstart' ? e.touches[0].pageX : e.pageX;
};

const dragMove = (e) => {
  currentX = e.type === 'touchmove' ? e.touches[0].pageX : e.pageX;
  if (Math.abs(currentX - startX) > 10) { // Se mover mais que 10px, considera arrasto
    isDragging = true;
  }
};

const endDrag = () => {
  if (isDragging) {
    clickPrevented = true; // Define que o clique deve ser prevenido
  }
  isDragging = false;
};

// Função para adicionar eventos de arrasto
const addDragEvents = (element) => {
  element.addEventListener('mousedown', startDrag);
  element.addEventListener('mousemove', dragMove);
  element.addEventListener('mouseup', endDrag);
  
  element.addEventListener('touchstart', startDrag);
  element.addEventListener('touchmove', dragMove);
  element.addEventListener('touchend', endDrag);
};

// Adiciona eventos de arrasto ao carrossel desktop
addDragEvents(gliderElementDesktop);

// Adiciona eventos de arrasto ao carrossel mobile
addDragEvents(gliderElementMobile);

// Previne o clique nos links se houver arrasto
const preventClickOnDrag = (element) => {
  element.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', (e) => {
      if (clickPrevented) {
        e.preventDefault(); // Previne o clique se foi arrastado
      } else {
        // O clique não foi prevenido, então executa a navegação
        window.location.href = link.href;
      }
      clickPrevented = false; // Reseta para o próximo clique
    });
  });
};

// Adiciona preventClick ao carrossel desktop
preventClickOnDrag(gliderElementDesktop);

// Adiciona preventClick ao carrossel mobile
preventClickOnDrag(gliderElementMobile);

// Função para avançar slides automaticamente (se necessário)
function advanceSlide(gliderElement) {
  const totalSlides = gliderElement.querySelectorAll('.glider-slide').length;
  const scrollPosition = gliderElement.scrollLeft;
  const slideWidth = gliderElement.clientWidth;
  const currentSlide = Math.round(scrollPosition / slideWidth);
  
  // Verifica se está no último slide e volta para o primeiro
  const nextSlide = (currentSlide + 1 >= totalSlides) ? 0 : currentSlide + 1;

  gliderElement.glider.scrollItem(nextSlide, true);
}

// Avança o slide automaticamente a cada 5 segundos
setInterval(() => {
  advanceSlide(gliderElementDesktop);
  advanceSlide(gliderElementMobile);
}, 2000);
