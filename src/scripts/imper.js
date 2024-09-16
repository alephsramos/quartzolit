const imperButtons = document.querySelectorAll('.imper__btns button');
const produtoImg = document.getElementById('produto-img-imper');

imperButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove a classe 'active' de todos os botões
        imperButtons.forEach(btn => btn.classList.remove('active'));
        
        // Adiciona a classe 'active' ao botão clicado
        button.classList.add('active');
        
        // Atualiza a imagem com base no botão clicado
        const newImage = button.getAttribute('data-image');
        produtoImg.src = `assets/img/${newImage}`; // Substitua pelo caminho correto das imagens
    });
});
