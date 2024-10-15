document.addEventListener("DOMContentLoaded", () => {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');
    const checkbox = document.querySelector('input[name="toggle"]');

    // Toggle menu
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    // Carrusel de imágenes
    const carouselImages = document.querySelectorAll('#carousel img');
    let currentImage = 0;

    function showImage(index) {
        carouselImages.forEach((img, i) => {
            img.style.transform = `translateX(${(i - index) * 100}%)`;
        });
    }

    setInterval(() => {
        currentImage = (currentImage + 1) % carouselImages.length;
        showImage(currentImage);
    }, 3000);

    // Validación del formulario
    const contactForm = document.getElementById('contact-form');
    const nameInput = document.getElementById('name');

    contactForm.addEventListener('submit', (event) => {
        event.preventDefault();
        const nameValue = nameInput.value.trim();
        const nameRegex = /^[a-zA-Z\s]+$/;

        if (!nameRegex.test(nameValue)) {
            alert('El nombre solo debe contener letras.');
            return;
        }

        alert('Formulario enviado con éxito.');
    });

    // Cambiar tema con el checkbox
    checkbox.addEventListener('change', () => {
        document.body.classList.toggle('dark-theme', checkbox.checked);
    });

    // Mostrar tooltip al pasar el cursor sobre la sección de proyectos
    const projectsSection = document.getElementById('projects');

    projectsSection.addEventListener('mouseenter', () => {
        const tooltip = document.createElement('div');
        tooltip.classList.add('project-tooltip');
        tooltip.innerText = 'Selecciona un proyecto para ver más detalles.';
        projectsSection.appendChild(tooltip);

        // Posicionar el tooltip
        const rect = projectsSection.getBoundingClientRect();
        tooltip.style.left = `${rect.left + window.scrollX + rect.width / 2 - tooltip.offsetWidth / 2}px`;
        tooltip.style.top = `${rect.top + window.scrollY - tooltip.offsetHeight - 10}px`;
    });

    projectsSection.addEventListener('mouseleave', () => {
        const tooltip = document.querySelector('.project-tooltip');
        if (tooltip) {
            tooltip.remove();
        }
    });
});
