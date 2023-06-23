const sendForm = () => {
    console.log('я sendForm');
    const form = document.getElementById('formId');

    const formName = form.querySelector('input[name="fio"]');
    const formPhone = form.querySelector('input[name="tel"]');

    const statusBlock = document.createElement('span');
    const loadText = 'загрузка';
    const errorText = 'ошибка';
    const successText = 'отправлено';

    let someElem = [];

    const validate = list => {
        let success = true;
        list.forEach(input => {
            if (!input.classList.contains('success')) {
                success = false;
            }
        });
        return success;
    };

    const sendData = data => {
        return fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(response => response.json())
    };
    const submitForm = form => {
        let formElements = form.querySelectorAll('input');
        const formData = new FormData(form);
        const formBody = {};

        statusBlock.textContent = loadText;
        form.append(statusBlock);

        formData.forEach((val, key) => {
            formBody[key] = val;
        });

        someElem.forEach(elem => {
            const element = document.getElementById(elem.id);
            console.log(element);

            if (elem.type === 'block') {
                formBody[elem.id] = element.textContent;
            } else if (elem.type === 'input') {
                formBody[elem.id] = element.value;
            }
        });

        sendData(formBody).then(data => {
            statusBlock.textContent = successText;
            formElements.forEach(input => {
                input.value = '';
            });
        }).catch(error => {
            statusBlock.textContent = errorText;
        });
    };

    try {
        if (!form) {
            throw new Error('верните, пожалуйста, форму');
        }
        form.addEventListener('submit', e => {
            e.preventDefault();

            const formElements = form.querySelectorAll('input[type="text"] ');
            console.log(formElements);

            isError = false;

            if (/^[А-Яа-яЁё\s-]+$/gi.test(formName.value) && formName.value !== '') {
                formName.classList.add('success');
            } else {
                isError = true;
                alert('в поле для имени вводите только кириллицу');
            }

            if (/^[\d()+-]+$/g.test(formPhone.value) && formPhone.value !== '') {
                formPhone.classList.add('success');
            } else {
                isError = true;
                alert('в поле номер телефона вводите только цифры, дефис');
            }
            //

            if (validate(formElements)) {
                submitForm(form);
            } else {
                alert('Ошибка ввода');
            }
        });
    } catch (error) {
        console.log(error.message);
    };

}
module.exports = sendForm;
