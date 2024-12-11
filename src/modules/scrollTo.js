const scrollTo = () => {
    let body = document.querySelector("body");
    let btn = document.querySelector(".up");
    let topSlider = document.querySelector('.top-slider')
    let screenY = topSlider.offsetHeight

    window.onscroll = function() {
      if (scrollY > screenY) {
        btn.style.opacity = 1
      } else {
        btn.style.opacity = 0
      }
    }
    
    btn.onclick = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
}

export default scrollTo