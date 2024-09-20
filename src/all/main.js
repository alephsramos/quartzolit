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



const navbar = document.querySelector('.nav');
const navBall = document.createElement('div'); // Cria a bolinha
const navBallImg = document.createElement('img'); // Cria a imagem dentro da bolinha

// Adiciona a bolinha ao body e estiliza
navBall.classList.add('nav-ball');
navBallImg.src = '../../assets/img/logomarca/fast_solo.svg'; // Insira o link da imagem que quer mostrar na bolinha
navBall.appendChild(navBallImg);
document.body.appendChild(navBall);

// Esconde a bolinha e a navbar inicialmente
navBall.style.transform = 'translateX(-50%) scale(0)';
navBall.style.opacity = '0';
navbar.style.transform = 'scale(1)';
navbar.style.opacity = '1';

window.addEventListener('scroll', function() {
    // Quando rolar, faz a transição suave para esconder a navbar e mostrar a bolinha
    navbar.style.transform = 'scale(0)'; // Esconde a navbar
    navbar.style.opacity = '0'; // Fica invisível
    navbar.style.pointerEvents = 'none'; // Desabilita cliques enquanto está escondida
    navBall.style.transform = 'translateX(-50%) scale(1)'; // Mostra a bolinha
    navBall.style.opacity = '1'; // Fica visível

    // Limpa o timeout para reiniciar a contagem de tempo
    clearTimeout(timeout);

    // Configura um timeout para mostrar a navbar novamente após parar de rolar
    timeout = setTimeout(function() {
        navbar.style.transform = 'scale(1)'; // Mostra a navbar novamente
        navbar.style.opacity = '1'; // Fica visível
        navbar.style.pointerEvents = 'auto'; // Habilita cliques novamente
        navBall.style.transform = 'translateX(-50%) scale(0)'; // Esconde a bolinha
        navBall.style.opacity = '0'; // Fica invisível
    }, 3000); // Ajuste o tempo que deseja para a navbar voltar após parar a rolagem
});

