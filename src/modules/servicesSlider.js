const servicesSlider = () => {
//    const sliderBody = document.querySelector('.services-section')
//    const sliderItem = sliderBody.querySelectorAll('.col-sm-6')
//    const sliderInterval = 3000
//
//    let dots
//    let currentSlide = 0
//    let interval = 0
//    const autoSlide = () => {
//        currentSlide++
//        
//        if (currentSlide >= sliderItem.length) {
//            currentSlide = 0
//        }
//    }
//    const startSlide = (timer = 3000) => {
//        interval = setInterval(autoSlide, timer)
//    }
//    startSlide()
const sliderBlock = document.querySelector('.services-section')
const slides = sliderBlock.querySelectorAll('.col-sm-6')
const timeInterval = 3000

// const dotsContainer = document.querySelector('.portfolio-dots')

let dots
let currentSlide = 0
let interval = 0

const nextSlide = (elems, index) => {
    elems[index].classList.add('service-slide-active')
}

const prevSlide = (elems, index) => {
    elems[index].classList.remove('service-slide-active')
}

const autoSlide = () => {
    prevSlide(slides, currentSlide, 'service-slide-active')
//    prevSlide(dots, currentSlide, 'dot-active')
    currentSlide++
    if (currentSlide >= slides.length) {
        currentSlide = 0
    }
    nextSlide(slides, currentSlide, 'service-slide-active')
//    nextSlide(dots, currentSlide, 'dot-active')
}
const startSlide = (timer = 1500) => {
    interval = setInterval(autoSlide, timer)
}
const stopSlide = () => {
    clearInterval(interval)
}
//const createDots = () => {
//    slides.forEach((slide, index) => {
//        slide = document.createElement('li')
//        slide.classList.add('dot')
//
//        if (index == 0) {
//            slide.classList.add('dot-active')
//        }
//        
//        dotsContainer.append(slide)
//    })
//    let newDots = document.querySelectorAll('.dot')
//
//    
//    dots = newDots
//}
//sliderBlock.addEventListener('click', (e) => {
//    e.preventDefault()
//
////    if (!e.target.matches('.dot, .portfolio-btn')) {
////        return
////    }
//    prevSlide(slides, currentSlide, 'service-slide-active')
////    prevSlide(dots, currentSlide, 'dot-active')
//
//    if (e.target.matches('.arrow-right')) {
//        currentSlide++
//    } else if (e.target.matches('.arrow-left')) {
//        currentSlide--
////    } else if (e.target.classList.contains('dot')) {
////        dots.forEach((dot, index) => {
////            if (e.target === dot) {
////                currentSlide = index
////            }
////        })
//    }
//
//    if (currentSlide >= slides.length) {
//        currentSlide = 0
//    }
//
//    if (currentSlide < 0) {
//        currentSlide = slides.length - 1
//    }
//
//    nextSlide(slides, currentSlide, 'service-slide-active')
////    nextSlide(dots, currentSlide, 'dot-active')
//})


sliderBlock.addEventListener('mouseenter', (e) => {
    if (e.target.matches('.dot, .portfolio-btn')) {
        stopSlide()
    }
}, true)

sliderBlock.addEventListener('mouseleave', (e) => {
    if (e.target.matches('.dot, .portfolio-btn')) {
        startSlide(timeInterval)
    }
}, true)
//createDots()
startSlide(timeInterval)
}

export default servicesSlider