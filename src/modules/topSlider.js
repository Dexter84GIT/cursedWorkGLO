const topSlider = () => {
    const slider = document.querySelector('.top-slider')
    const slides = document.querySelectorAll('.top-slider .item')
    const table = document.querySelectorAll('.top-slider .table')

    let count = 0
    let interval = 0

    const autoSlide = () => {
        count++
        if (count >= slides.length) {
            count = 0
        }

        let height = slider.clientHeight

        slides.forEach((item, index) => { 
            if (index === count) {
                item.classList.add('active')
                item.style.transition = 0.3 + 's'
                item.style.marginTop = `-${(height * index)}px`
            } else if (index !== count) {
                item.classList.remove('active')
                item.style.marginTop = 0 + 'px'
            }
        })
        table.forEach((item, index) => { 
            if (index === count) {
                item.classList.add('active')
            } else if (index !== count) {
                item.classList.remove('active')
            }
        })

    }

    const startSlide = (timer = 5000) => {
        interval = setInterval(autoSlide, timer)
    }
startSlide()
}    

export default topSlider