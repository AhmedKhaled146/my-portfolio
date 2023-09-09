const navbarLinks = document.getElementById('navbar-links');
const navbarToggle = document.getElementById('navbar-toggle');

navbarToggle.addEventListener('click', () => {
    navbarLinks.classList.toggle('show');
    navbarToggle.classList.toggle('active');
});

// Close the navbar when a link is clicked (optional)
const navLinks = document.querySelectorAll('.navbar-links a');
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbarLinks.classList.remove('show');
        navbarToggle.classList.remove('active');
    });
});
