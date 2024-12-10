import { validate } from './validate'

const send = () => {
    const form = document.querySelector('form[name="form-callback"]')
    let status = document.createElement('div')
    const waitStatus = 'Идёт отправка...'
    const successStatus = 'Ваша заявка отправлена!'
    const errorStatus = 'Произошла ошибка :('
    const validateError = 'Введите верные данные'

    let check = false

    const sendData = (data) => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(res => res.json())
    }

    const sendForm = () => {
        const formElements = form.querySelectorAll('input')
        const formData = new FormData(form)
        const formBody = {}

        status.textContent = waitStatus
        status.classList.add('status-text')
        form.append(status)

        formData.forEach((val, key) => {
            formBody[key] = val
        })

        if (validate(formElements)) {
            sendData(formBody)
            .then(data => {
                status.textContent = successStatus
                formElements.forEach(input => {
                    if (input.type === 'text') {
                        input.value = ''
                    }
                })
            })
            .catch(error => {
                status.textContent = errorStatus
            })
        } else {
            console.log(check);
            status.textContent = validateError
        }
    }

       form.addEventListener('submit', (e) => {
           e.preventDefault()
           sendForm()
       })
       validate()
}

export default send