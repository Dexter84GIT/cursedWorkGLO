const validate = () => {
    const name = document.querySelector('input[name="fio"]')
    const phone = document.querySelector('input[name="tel"]')
    const nameValid = /[а-яА-Я]/
    const phoneValid = /[0-9\+]/

    name.addEventListener('input', (e) => {
        if (nameValid.test(name)) {
            console.log('OK');
        } else {
            console.log('Not OK');
        }
    })
}

export {validate}