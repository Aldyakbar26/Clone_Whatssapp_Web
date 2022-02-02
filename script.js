// NAVBAR
const navbar = document.querySelector('.navbar');
console.log(navbar);

window.addEventListener('scroll', function () {
    const navsPosition = window.scrollY;
    console.log(navsPosition);

    if (navsPosition > 10) {
        navbar.classList.add('animation-navbar');
    } else {
        navbar.classList.remove('animation-navbar');
    }
})
// END OF NAVBAR