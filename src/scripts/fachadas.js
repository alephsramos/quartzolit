const buttons = document.querySelectorAll('.fachadas__btns button');
const image = document.getElementById('produto-img');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove a classe 'active' de todos os botões
        buttons.forEach(btn => btn.classList.remove('active'));
        
        // Adiciona a classe 'active' ao botão clicado
        button.classList.add('active');
        
        // Atualiza a imagem com base no botão clicado
        const newImage = button.getAttribute('data-image');
        image.src = `assets/img/banners/${newImage}`; // Substitua pelo caminho correto das imagens
    });
});
