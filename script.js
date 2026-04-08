document.addEventListener("DOMContentLoaded", () => {
    
    const cards = document.querySelectorAll('.projeto-card');

    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    cards.forEach(card => {
        card.classList.add('hidden'); // Oculta o card inicialmente
        observer.observe(card);
    });

    const linksRepo = document.querySelectorAll('.repo-link');
    
    linksRepo.forEach(link => {
        link.addEventListener('click', (event) => {
            const href = link.getAttribute('href');
            if (href === '#') {
                event.preventDefault(); 
                alert('Em breve! Os detalhes completos deste projeto serão adicionados logo.');
            }
        });
    });
});