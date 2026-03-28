document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.querySelector('.navbar');
    
    // Cambiar fondo del navbar al hacer scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.style.background = '#0c0c0c';
            navbar.style.padding = '10px 5%';
        } else {
            navbar.style.background = 'rgba(12, 12, 12, 0.8)';
            navbar.style.padding = '20px 5%';
        }
    });

    // Manejo básico del formulario
    const form = document.getElementById('booking-form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Merci pour votre demande. Notre équipe de conciergerie vous contactera sous peu.');
        form.reset();
    });

    // Animación suave para los enlaces de navegación (opcional)
    document.querySelectorAll('nav a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            console.log("Navigation vers : " + this.innerText);
        });
    });
});