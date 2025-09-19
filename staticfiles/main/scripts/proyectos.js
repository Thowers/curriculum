const track = document.querySelector('.carousel-track');

// Si no hay carrusel en la página, no hagas nada.
if (track) {
    const slides = Array.from(track.children);
    const nextButton = document.querySelector('.carousel-button--right');
    const prevButton = document.querySelector('.carousel-button--left');

    // Obtenemos el tamaño de un slide (responsive)
    const getSlideWidth = () => slides[0].getBoundingClientRect().width;

    // Mover track mediante index
    const moveToIndex = (index) => {
        const slideWidth = getSlideWidth();
        track.style.transform = `translateX(-${index * slideWidth}px)`;
        slides.forEach(s => s.classList.remove('current-slide'));
        slides[index].classList.add('current-slide');
        updateButtons(index);
    };

    const updateButtons = (targetIndex) => {
        if (!prevButton || !nextButton) return;
        if (targetIndex === 0) {
            prevButton.classList.add('is-hidden');
            nextButton.classList.remove('is-hidden');
        } else if (targetIndex === slides.length - 1) {
            prevButton.classList.remove('is-hidden');
            nextButton.classList.add('is-hidden');
        } else {
            prevButton.classList.remove('is-hidden');
            nextButton.classList.remove('is-hidden');
        }
    }

    // Click en el botón de siguiente
    nextButton.addEventListener('click', e => {
        const currentIndex = slides.findIndex(s => s.classList.contains('current-slide'));
        const nextIndex = Math.min(currentIndex + 1, slides.length - 1);
        moveToIndex(nextIndex);
    });

    // Click en el botón de anterior
    prevButton.addEventListener('click', e => {
        const currentIndex = slides.findIndex(s => s.classList.contains('current-slide'));
        const prevIndex = Math.max(currentIndex - 1, 0);
        moveToIndex(prevIndex);
    });

    // Ajustar en resize (recalcular ancho y reposicionar)
    window.addEventListener('resize', () => {
        const currentIndex = slides.findIndex(s => s.classList.contains('current-slide'));
        // reposicionar según nuevo ancho
        moveToIndex(currentIndex >= 0 ? currentIndex : 0);
    });

    // Inicializar el carrusel
    const initCarousel = () => {
        slides.forEach(s => s.classList.remove('current-slide'));
        slides[0].classList.add('current-slide');
        prevButton.classList.add('is-hidden');
        // Asegurarse que el transform inicial esté en 0
        track.style.transform = 'translateX(0)';
    }

    initCarousel();
}

// Toggle del menú hamburguesa (accesible)
(function() {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (!hamburger || !navMenu) return;

  hamburger.addEventListener('click', () => {
    const isActive = navMenu.classList.toggle('active');
    hamburger.setAttribute('aria-expanded', isActive ? 'true' : 'false');
  });

  // Cerrar menú al hacer click fuera (mejora UX)
  document.addEventListener('click', (e) => {
    if (!navMenu.classList.contains('active')) return;
    const insideHeader = e.target.closest('.main-header');
    if (!insideHeader) {
      navMenu.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });

  // Cerrar menú al cambiar a desktop (evita estado activo residual)
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && navMenu.classList.contains('active')) {
      navMenu.classList.remove('active');
      hamburger.setAttribute('aria-expanded', 'false');
    }
  });
})();