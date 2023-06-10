const ul = document.querySelector('nav ul')
const menuBtn = document.querySelector('.menu-btn i')

function menuShow() {
    if (ul.classList.contains('open')) {
        ul.classList.remove('open')
    } else {
        ul.classList.add('open')
    }
}