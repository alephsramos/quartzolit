document.addEventListener('DOMContentLoaded', function () {
    const gliderElementsTwo = document.querySelectorAll('.pisos__glider');
    
    gliderElementsTwo.forEach(gliderElementTwo => {
        const gliderTwo = new Glider(gliderElementTwo, {
            slidesToShow: 1,
            slidesToScroll: 1,
            draggable: true,
            dots: false,  // Se quiser adicionar navegação de pontos
            arrows: {
                prev: '.glider-prev',
                next: '.glider-next'
            }
        });

        // Função que avança o slide automaticamente
        function advanceSlideTwo() {
            console.log('Avançando slide...');
            const totalSlidesTwo = gliderElementTwo.querySelectorAll('.pisos__glider-slide').length;
            const nextSlideTwo = (gliderTwo.page + 1) % totalSlidesTwo;
            gliderTwo.scrollItem(nextSlideTwo, true);
        }

        // Avança o slide automaticamente a cada 2 segundos
        setInterval(advanceSlideTwo, 2000);
    });
});
