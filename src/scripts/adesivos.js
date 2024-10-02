// Primeira seção de botões
const buttons = document.querySelectorAll('.adesivos__btns button');
const image = document.getElementById('produto-img');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove a classe 'active' de todos os botões
        buttons.forEach(btn => btn.classList.remove('active'));
        
        // Adiciona a classe 'active' ao botão clicado
        this.classList.add('active');
        
        // Atualiza a imagem
        const newImage = this.getAttribute('data-image');
        image.src = `assets/img/banners/${newImage}`; 
    });
});

// Segunda seção de botões

