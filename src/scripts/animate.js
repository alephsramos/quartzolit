document.addEventListener('DOMContentLoaded', function() {
  const animateElements = document.querySelectorAll('.animate');

  // Função para verificar se o usuário está em um dispositivo iPhone
  function isIPhone() {
    return /iPhone/i.test(navigator.userAgent);
  }

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');

        // Verifica se é iPhone
        if (isIPhone()) {
          observer.unobserve(entry.target); // Remove o elemento do observador somente em iPhones
        }
      } else {
        // Somente remove a animação se não for iPhone
        if (!isIPhone()) {
          entry.target.classList.remove('in-view');
        }
      }
    });
  }, { threshold: 0.1 }); // Ajuste o valor do threshold conforme necessário

  animateElements.forEach(element => {
    observer.observe(element);
  });
});
