import { animate } from './helpers'

const modal = () => {
    const body = document.querySelector('body')
    const modalOverlay = document.querySelector('.modal-overlay')
    const modalCallback = document.getElementById('callback')
    
    const open = () => {
        animate({
            duration: 1000,
            timing(timeFraction) {
              return timeFraction;
            },
            draw(progress) {
                modalOverlay.style.opacity = progress
                modalCallback.style.opacity = progress
                modalOverlay.style.display = 'block'
                modalCallback.style.display = 'block'
            }
        })
    }

    const close = () => {
        modalOverlay.style.display = 'none'
        modalCallback.style.display = 'none'
    }
    
    body.addEventListener('click', (e) => {
        if ((e.target.closest('.fancyboxModal')) || (e.target.closest('.callback-btn'))) {
            open()
        } else if ((e.target.closest('.modal-overlay')) || (e.target.closest('.modal-close'))) {
            close()
        }
    })
}

export default modal