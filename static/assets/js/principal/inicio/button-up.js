(function() {
    const backToTopButton = document.createElement('button-up');
    
    backToTopButton.style.position = 'fixed';
    backToTopButton.style.bottom = '20px';
    backToTopButton.style.right = '20px';
    backToTopButton.style.display = 'none'; // Ocultar inicialmente
    backToTopButton.style.cursor = 'pointer';
    backToTopButton.style.transition = 'all 0.3s ease';
    
    // Añadir imagen dentro del botón
    const img = document.createElement('img');
    img.src = 'https://agenda2030lac.org/estadisticas/images/icon-top.png';
    img.alt = 'ODS Icon';
    img.style.width = '50px';
    img.style.height = '50px';
    backToTopButton.appendChild(img);

    document.body.appendChild(backToTopButton);

    backToTopButton.addEventListener('mouseover', () => {
        backToTopButton.style.transform = 'scale(1.1)';
    });

    backToTopButton.addEventListener('mouseout', () => {
        backToTopButton.style.transform = 'scale(1)';
    });

    // Mostrar/ocultar el botón al hacer scroll
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            backToTopButton.style.display = 'block';
        } else {
            backToTopButton.style.display = 'none';
        }
    });

    // Volver al inicio al hacer click en el botón
    backToTopButton.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
})();
