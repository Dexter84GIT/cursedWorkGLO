
const validate = (check) => {
    const name = document.querySelector('input[name="fio"]')
    const phone = document.querySelector('input[name="tel"]')
    const nameValid = /[^а-яА-Я{8,}]/gi
    const phoneValid = /[^\d\+]/gi

    name.addEventListener('input', (e) => {
        let value = e.target.value
        if (nameValid.test(value) && value !== '') {
            value = value.replace(nameValid, '')
            e.target.value = value
            name.style.borderColor = 'red'
        } else {
            name.style.borderColor = 'green'
        }
    })

    phone.addEventListener('input', (e) => {
        let value = e.target.value
        if (phoneValid.test(value) && value !== '') {
            value = value.replace(phoneValid, '')
            e.target.value = value
            phone.style.borderColor = 'red'
        } else {
            phone.style.borderColor = 'green'
        }
    })
    return check
}

export {validate}