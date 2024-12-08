import { validate } from './validate'

const send = () => {
    const form = document.getElementById('callback')
    let status = document.createElement('div')
    const waitStatus = 'Идёт отправка...'
    const successStatus = 'Ваша заявка отправлена!'
    const errorStatus = 'Произошла ошибка :('

    const sendData = (data) => {
        return fetch('./server.php', {
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

        if (validate(formElements)) {
            sendData(formBody)
            .then(data => {
                statusBlock.textContent = successText
                formElements.forEach(input => {
                    input.value = ''
                })
            })
            .catch(error => {
                statusBlock.textContent = errorText
            })
        } else {
            alert('Данные не валидны!')
        }
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault()
        sendForm()
    })
}

export default send