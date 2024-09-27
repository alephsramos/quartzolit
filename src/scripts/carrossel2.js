// Função original para controlar o Glider
const gliderElementsTwo = document.querySelectorAll('.glider__two');
gliderElementsTwo.forEach(gliderElementTwo => {
  const gliderTwo = new Glider(gliderElementTwo, {
    slidesToShow: 1,
    slidesToScroll: 5,
    draggable: true,
    dots: '.dots__two',
  });

  function advanceSlideTwo() {
    console.log('Avançando slide...');
    const totalSlidesTwo = gliderElementTwo.querySelectorAll('.glider-slide').length;
    const scrollPositionTwo = gliderElementTwo.scrollLeft;
    const slideWidthTwo = gliderElementTwo.clientWidth;
    const currentSlideTwo = Math.round(scrollPositionTwo / slideWidthTwo);
    const nextSlideTwo = (currentSlideTwo + 1) % totalSlidesTwo;
    gliderTwo.scrollItem(nextSlideTwo, true);
  }

  setInterval(advanceSlideTwo, 2000);
});

document.addEventListener('DOMContentLoaded', function() {
  // Lógica para carregar mais produtos
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  const products = document.querySelectorAll('.produtos__center');
  let productsToShow = 4; // Número de produtos visíveis no início
  let currentIndex = 0;

  // Função para mostrar os produtos
  function showProducts() {
    for (let i = currentIndex; i < currentIndex + productsToShow && i < products.length; i++) {
      products[i].classList.add('visible');
    }
    currentIndex += productsToShow;

    // Se todos os produtos estiverem visíveis, ocultar o botão
    if (currentIndex >= products.length) {
      loadMoreBtn.style.display = 'none';
    }
  }

  // Mostrar os primeiros produtos ao carregar a página
  showProducts();

  // Adicionar evento ao botão para carregar mais produtos
  loadMoreBtn.addEventListener('click', showProducts);

  // Função para alternar a exibição dos detalhes dos produtos
  document.querySelectorAll('.toggleProduct').forEach(button => {
    button.addEventListener('click', function () {
      // Referencia o contêiner mais próximo e o próximo elemento de detalhes do produto
      const container = this.closest('.produtos__container');
      const productOpen = container ? container.nextElementSibling : null;

      if (!productOpen) return;

      // Fecha todos os outros elementos abertos
      document.querySelectorAll('.produto__open').forEach(openSection => {
        if (openSection !== productOpen && openSection.classList.contains('open')) {
          openSection.classList.remove('open');
          const otherButton = openSection.previousElementSibling.querySelector('.toggleProduct');
          if (otherButton) {
            otherButton.querySelector('span').textContent = 'Ver mais';
            otherButton.querySelector('i').className = 'fa-solid fa-plus';
          }
        }
      });

      // Alterna o estado do item clicado
      const isOpen = productOpen.classList.contains('open');
      productOpen.classList.toggle('open', !isOpen);

      // Muda o texto e o ícone com transição suave
      const span = this.querySelector('span');
      const icon = this.querySelector('i');

      // Adiciona a classe de ocultação ao ícone atual
      icon.classList.add('hidden');

      // Após a transição do ícone atual, muda o texto e o ícone
      setTimeout(() => {
        span.textContent = isOpen ? 'Ver mais' : 'Minimizar';
        icon.className = isOpen ? 'fa-solid fa-plus' : 'fa-solid fa-minus';
        icon.classList.remove('hidden');
      }, 100); // Tempo igual ao da transição CSS
    });
  });
});
