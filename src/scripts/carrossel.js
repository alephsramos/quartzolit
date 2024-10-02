// Seleciona os elementos do carrossel para desktop e mobile
const gliderElementDesktop = document.querySelector('.desktop-carousel .glider');
const gliderElementMobile = document.querySelector('.mobile-carousel .glider');

// Inicializa os carrosséis
const initGlider = (gliderElement) => {
  return new Glider(gliderElement, {
    slidesToShow: 1,
    slidesToScroll: 1,
    draggable: true,
    dots: gliderElement.parentElement.querySelector('.dots'),
    rewind: true, // Volta ao primeiro slide automaticamente ao chegar ao final
  });
};

const gliderDesktop = initGlider(gliderElementDesktop);
const gliderMobile = initGlider(gliderElementMobile);

// Função para avançar slides automaticamente
const advanceSlide = (gliderInstance) => {
  const totalSlides = gliderInstance.slides.length;
  const currentSlide = gliderInstance.page;

  // Verifica se está no último slide e volta para o primeiro
  const nextSlide = (currentSlide + 1 >= totalSlides) ? 0 : currentSlide + 1;

  gliderInstance.scrollItem(nextSlide, true);
};

// Função para iniciar o auto-play de slides
const startAutoPlay = (gliderInstance) => {
  setInterval(() => advanceSlide(gliderInstance), 2500); // Avança a cada 5 segundos
};

// Adiciona o autoplay para ambos carrosséis (desktop e mobile)
startAutoPlay(gliderDesktop);
startAutoPlay(gliderMobile);

// Adiciona eventos de arrasto ao carrossel (mesma lógica para desktop e mobile)
const addDragEvents = (element) => {
  let isDragging = false;
  let clickPrevented = false;
  let startX, currentX;

  const startDrag = (e) => {
    isDragging = false;
    clickPrevented = false;
    startX = e.type === 'touchstart' ? e.touches[0].pageX : e.pageX;
  };

  const dragMove = (e) => {
    currentX = e.type === 'touchmove' ? e.touches[0].pageX : e.pageX;
    if (Math.abs(currentX - startX) > 10) {
      isDragging = true;
    }
  };

  const endDrag = () => {
    if (isDragging) {
      clickPrevented = true; // Define que o clique deve ser prevenido
    }
    isDragging = false;
  };

  element.addEventListener('mousedown', startDrag);
  element.addEventListener('mousemove', dragMove);
  element.addEventListener('mouseup', endDrag);

  element.addEventListener('touchstart', startDrag);
  element.addEventListener('touchmove', dragMove);
  element.addEventListener('touchend', endDrag);
};

// Aplica eventos de arrasto para ambos carrosséis
addDragEvents(gliderElementDesktop);
addDragEvents(gliderElementMobile);

// Previne o clique nos links se houver arrasto
[gliderElementDesktop, gliderElementMobile].forEach(gliderElement => {
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
});
