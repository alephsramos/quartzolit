const gliderElement = document.querySelector('.glider');
const glider = new Glider(gliderElement, {
  slidesToShow: 1,
  slidesToScroll: 1,
  draggable: true,
  dots: '.dots',
});

let isDragging = false;
let clickPrevented = false;
let startX, currentX;

// Detecta quando o mouse é pressionado
gliderElement.addEventListener('mousedown', (e) => {
  isDragging = false;
  clickPrevented = false;
  startX = e.pageX;
});

// Detecta movimento para identificar arrasto
gliderElement.addEventListener('mousemove', (e) => {
  currentX = e.pageX;
  if (Math.abs(currentX - startX) > 10) { // Se mover mais que 10px, considera arrasto
    isDragging = true;
  }
});

// Finaliza o arrasto e verifica se o clique deve ser prevenido
gliderElement.addEventListener('mouseup', () => {
  if (isDragging) {
    clickPrevented = true; // Define que o clique deve ser prevenido
  }
  isDragging = false;
});

// Previne o clique nos links se houver arrasto
gliderElement.querySelectorAll('a').forEach(link => {
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

// Função para avançar slides automaticamente (se necessário)
function advanceSlide() {
  const totalSlides = gliderElement.querySelectorAll('div').length;
  const scrollPosition = gliderElement.scrollLeft;
  const slideWidth = gliderElement.clientWidth;
  const currentSlide = Math.round(scrollPosition / slideWidth);
  const nextSlide = (currentSlide + 1) % totalSlides;

  glider.scrollItem(nextSlide, true);
}

// Avança o slide automaticamente a cada 5 segundos
setInterval(advanceSlide, 5000);
