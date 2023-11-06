const menu = document.querySelector('.menu')
const header = document.querySelector('.header')
const slideButtons = document.querySelectorAll('.balls li')
const testimonials = document.querySelectorAll('.testimonial')
let currentIndex = 0
let currentTestimonial = testimonials[currentIndex]

const toggleMenu = () => {
    header.classList.toggle('open')

    menu.src = menu.src.includes('images/icon-hamburger.svg') ? 'images/icon-close.svg' : 'images/icon-hamburger.svg'
}

const changeTestimonial = (index) => {
    slideButtons[currentIndex].classList.remove('clicked')

    currentTestimonial.classList.remove('show')

    currentIndex = index

    slideButtons[currentIndex].classList.add('clicked')

    currentTestimonial = testimonials[currentIndex]

    currentTestimonial.classList.add('show')
}

menu.addEventListener('click', toggleMenu)

slideButtons.forEach((button, index) => {
    const changeTestimonialHandler = () => {
        changeTestimonial(index);
    }

    button.addEventListener('click', changeTestimonialHandler)
    button.addEventListener('touchstart', changeTestimonialHandler)
});
