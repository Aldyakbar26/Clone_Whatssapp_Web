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


// MESSAGE
const messageFromMe = document.querySelector('#message .container .message-from-me');
console.log(messageFromMe);

window.addEventListener('load', function () {
    this.setTimeout(() => {
        messageFromMe.classList.add('message-animation');
    }, 2000)

    messageFromMe.addEventListener('click', (e) => {
        if (e.target.className == 'fas fa-times') {
            messageFromMe.classList.remove('message-animation');
        }
    })
})
// END OF MESSAGE