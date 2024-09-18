let timeout;

window.addEventListener('scroll', () => {
  const gradient = document.querySelector('.top-gradient');
  
  // Aplica a classe 'active' para mostrar a sombra
  gradient.classList.add('active');

  // Limpa o timeout anterior (se houver)
  clearTimeout(timeout);

  // Define um novo timeout de 1 segundo para remover a classe 'active'
  timeout = setTimeout(() => {
    gradient.classList.remove('active');
  }, 200); // 1000 ms = 1 segundo
});
