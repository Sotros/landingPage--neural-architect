// Este archivo contiene el código JavaScript que maneja la interactividad y el comportamiento dinámico de la página.

document.addEventListener('DOMContentLoaded', () => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target); // La animación solo ocurre una vez
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach(element => {
        // Evitamos animar la cabecera porque ya la cargamos activa por defecto
        if(!element.classList.contains('active')) {
            observer.observe(element);
        }
    });
});