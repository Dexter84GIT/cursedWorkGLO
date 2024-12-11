import { validate } from './validate'

const send = () => {
    const form = document.querySelector('form[name="form-callback"]')
    const status = document.createElement('div')
    const waitStatus = 'Идёт отправка...'
    const successStatus = 'Ваша заявка отправлена!'
    const errorStatus = 'Произошла ошибка :('
    const validateError = 'Введите верные данные'

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
        status.style.display = 'block'
        form.append(status)
        if (status) {
            setTimeout(() => {
                status.style.display = 'none'
            }, 5000);
        }

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