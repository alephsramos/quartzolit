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

document.addEventListener('DOMContentLoaded', () => {
  const products = document.querySelectorAll('.produtos__container__left');
  const button = document.getElementById('loadMoreBtn');
  let visibleCount = 4;

  // Função para mostrar produtos
  const showProducts = () => {
    products.forEach((product, index) => {
      if (index < visibleCount) {
        product.parentElement.classList.add('visible');
      } else {
        product.parentElement.classList.remove('visible');
      }
    });
    button.style.display = (visibleCount >= products.length) ? 'none' : 'block';
  };

  // Inicializa a exibição dos produtos
  showProducts();

  // Evento para o botão "Ver mais"
  button.addEventListener('click', () => {
    visibleCount += 4; // Adiciona 4 produtos a cada clique
    showProducts();
  });

  document.querySelectorAll('.toggleProduct').forEach(button => {
    button.addEventListener('click', function () {
      const container = this.closest('.produtos__container');
      const productOpen = container.nextElementSibling;

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
