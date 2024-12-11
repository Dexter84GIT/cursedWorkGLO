const scrollTo = () => {
    const btn = document.querySelector(".up");
    const topSlider = document.querySelector('.top-slider')
    const screenY = topSlider.offsetHeight

    window.onscroll = function () {
        if (scrollY > screenY) {
            btn.style.opacity = 1
        } else {
            btn.style.opacity = 0
        }
    }

    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        })
    })
}

export default scrollTo