const accordeon = () => {
    const accBody = document.querySelector('.accordeon')
    const accTitle = document.querySelectorAll('.accordeon .title')
    
    accBody.addEventListener('click', (e) => {        
        if (e.target.closest('.element')) {
            const accActive = e.target.closest('.title')

            accTitle.forEach(element => {
                if (element === accActive) {
                    element.classList.add('active')
                } else {
                    element.classList.remove('active')
                }
            })
        }
    })
}

export default accordeon