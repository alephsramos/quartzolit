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
    }, 1000); // Ajuste o tempo que deseja para a navbar voltar após parar a rolagem
});






 const searchMap = [
  { 
    regex: /\b(rejunte|rejuntes?|argamassa|argamassas?|cimento cola|cimento-cola|massa de assentamento|massa para rejunte|mortalha)\b/i, 
    anchor: "argamassas" 
  }, // Palavra-chave: Argamassas
  
  { 
    regex: /\b(solução|soluções?|opção|opções?|alternativa|alternativas|escolha|escolhas|possibilidade|possibilidades)\b/i, 
    anchor: "solucoes" 
  }, // Palavra-chave: Soluções
  
  { 
    regex: /\b(contato|fale conosco|faleconosco|suporte|atendimento|falar com a gente|entrar em contato|suporte técnico|assistência)\b/i, 
    anchor: "contato" 
  }, // Palavra-chave: Contato
  
  { 
    regex: /\b(impermeabilizante|impermeabilizantes?|hidrofugante|hidrofugantes|protetor de superfícies|selador de superfície|protetores de superfícies)\b/i, 
    anchor: "impermeabilizantes" 
  }, // Palavra-chave: Impermeabilizantes
  
  { 
    regex: /\b(adesivo|adesivos?|cola|colas|adesivo de construção|adesivo estrutural|adesivo epóxi)\b/i, 
    anchor: "adesivos" 
  }, // Palavra-chave: Adesivos
  
  { 
    regex: /\b(selante|selantes?|silicone|selador|massa selante|vedante|massa de vedação)\b/i, 
    anchor: "selantes" 
  }, // Palavra-chave: Selantes
  
  { 
    regex: /\b(produto|produtos?|material|materiais|insumos|mercadoria|mercadorias|itens)\b/i, 
    anchor: "produtos" 
  }, // Palavra-chave: Produtos
  
  { 
    regex: /\b(fachada|fachadas?|revestimento de fachada|revestimentos de fachada|parede externa|paredes externas|acabamento externo|acabamentos externos)\b/i, 
    anchor: "fachadas" 
  }, // Palavra-chave: Fachadas
];


// Função para normalizar strings, removendo acentos e caracteres especiais
function normalizeString(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
}

// Função que exibe o alerta no centro da tela
function showAlert(message) {
  const alertModal = document.getElementById("alertModal");
  document.getElementById("alertMessage").textContent = message;
  alertModal.style.display = "block";
}

// Função para esconder o alerta
document.getElementById("closeAlert").addEventListener("click", function() {
  document.getElementById("alertModal").style.display = "none";
});

// Função de busca por âncora
function performSearch() {
  const searchTerm = normalizeString(document.getElementById("search").value.trim());

  // Verifica se o termo pesquisado corresponde a uma expressão regular definida
  const match = searchMap.find(entry => entry.regex.test(searchTerm));

  if (match) {
      const anchorElement = document.getElementById(match.anchor);
      if (anchorElement) {
          anchorElement.scrollIntoView({ behavior: "smooth" });
      }
  } else {
      showAlert("Nenhum resultado encontrado para: " + searchTerm);
  }
}

// Escuta o clique no botão de busca
document.getElementById("searchButton").addEventListener("click", function(event) {
  event.preventDefault(); // Evita comportamento padrão
  performSearch();
});

// Escuta o pressionamento de teclas para detectar "Enter"
document.getElementById("search").addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    event.preventDefault(); // Evita comportamento padrão
    performSearch();
  }
});
