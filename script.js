document.addEventListener('DOMContentLoaded', function() {
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const targetSection = document.querySelector(this.getAttribute('href'));
            window.scrollTo({
                top: targetSection.offsetTop - 70,
                behavior: 'smooth'
            });
        });
    });


    // Mapa de curvas de nível
    const mapCurvas = L.map('map-curvas').setView([-15.7942, -47.8822], 4); // Centro no Brasil

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(mapCurvas);

    L.marker([-15.7942, -47.8822]).addTo(mapCurvas)
        .bindPopup('Área com curvas de nível.')
        .openPopup();

    // Se você tiver um arquivo específico de curvas de nível (em GeoJSON ou outro formato), você pode adicioná-lo aqui
});
