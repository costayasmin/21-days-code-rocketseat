function toggleDarkMode() {
    const body = document.body;
    const button = document.querySelector('#toggle');
    const sunIcon = document.querySelector('.ph-sun');
    const moonIcon = document.querySelector('.ph-moon');

    button.classList.toggle("button-dark-mode");
    body.classList.toggle('body-dark-mode');

    sunIcon.classList.toggle('active');
    moonIcon.classList.toggle('active');
}