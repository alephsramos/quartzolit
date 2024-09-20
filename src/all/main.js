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

// Esconde a bolinha inicialmente
navBall.style.opacity = '0';
navBall.style.pointerEvents = 'none';

window.addEventListener('scroll', function() {
    // Quando rolar, faz a transição suave para esconder a navbar e mostrar a bolinha
    navbar.style.opacity = '0';
    navbar.style.pointerEvents = 'none'; // Desabilita cliques enquanto está escondida
    navBall.style.opacity = '1';
    navBall.style.pointerEvents = 'auto'; // Habilita cliques na bolinha

    // Limpa o timeout para reiniciar a contagem de tempo
    clearTimeout(timeout);

    // Configura um timeout para mostrar a navbar novamente após parar de rolar
    timeout = setTimeout(function() {
        navbar.style.opacity = '1';
        navbar.style.pointerEvents = 'auto'; // Habilita cliques novamente
        navBall.style.opacity = '0'; // Esconde a bolinha
        navBall.style.pointerEvents = 'none';
    }, 1000); // Ajuste o tempo que deseja para a navbar voltar após parar a rolagem
});



