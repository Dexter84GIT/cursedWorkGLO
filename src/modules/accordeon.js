const accordeon = () => {
    const accBody = document.querySelector('.accordeon')
    const accElement = document.querySelectorAll('.accordeon .element')

    accElement.forEach(elem => {
        const accTitle = elem.querySelectorAll('.accordeon .title')
        const accContent = elem.querySelectorAll('.accordeon .element-content')
        elem.addEventListener('click', (e) => {
            if ((e.target.closest('.active')) && (e.target.closest('.title'))) {
                elem.classList.remove('active')
                accContent.forEach(text => {
                    text.style.display = 'none'
                }) 
            } else if ((!e.target.closest('.active')) && (e.target.closest('.title'))) {
                elem.classList.add('active')
                accContent.forEach(text => {
                    text.style.display = 'block'
                }) 
            } else if (elem.classList !== 'active') {

            }
        })
        
    })
}

export default accordeon