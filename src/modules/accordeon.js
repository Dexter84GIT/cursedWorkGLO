const accordeon = () => {
    const panelItem = document.querySelectorAll('.accordeon .title')

    let active;
    panelItem.forEach(function(item, i, panelItem) {
    item.addEventListener('click', function(e) {
        this.classList.add('active');
        this.nextElementSibling.classList.add('active');
        if (active) {
            active.classList.remove('active');
        active.nextElementSibling.classList.remove('active');
        } 
        active = (active === this) ? 0 : this;
        })
    })
}

export default accordeon