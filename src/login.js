export function showHidePassword(target) {
    const input = document.getElementById('password');

    if (input.getAttribute('type') === 'password') {
        target.classList.add('view');
        input.setAttribute('type', 'text');
    } else {
        target.classList.remove('view');
        input.setAttribute('type', 'password');
    }
}

export function loginUser() {
    const form = document.getElementById('form');

    if (!form || form.dataset.validationReady === 'true') {
        return;
    }

    form.dataset.validationReady = 'true';

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');

        const emailError = document.getElementById('email-error');
        const passwordError = document.getElementById('password-error');

        const email = emailInput.value.trim();
        const password = passwordInput.value;

        let hasError = false;

        emailInput.style.borderColor = '';
        passwordInput.style.borderColor = '';

        emailError.innerText = '';
        passwordError.innerText = '';


        if (email.length === 0) {
            emailInput.style.borderColor = 'red';
            emailError.innerText = 'Заполните поле';
            hasError = true;
        } else if (!email.includes('@') || !email.includes('.') || email.length > 48) {
            emailInput.style.borderColor = 'red';
            emailError.innerText = 'Некорректная почта';
            hasError = true;
        }

        if (password.length < 6) {
            passwordInput.style.borderColor = 'red';
            passwordError.innerText = 'Минимум 6 символов';
            hasError = true;
        }

        if (hasError) {
            return;
        }

        const newPost = {
            email: email,
            password: password,
        };

        try {
            const response = await fetch('http://localhost:8086/auth/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newPost)
            });

            const text = await response.text();

            if (text === 'Успешно') {
                window.location.href = '/Index.html';
                return;
            }

            if(text === 'Пользователя с такой почтой нет') {
                emailError.innerText = text;
                emailInput.style.borderColor = 'red';
            }

            if(text === 'Неверный пароль') {
                passwordError.innerText = text;
                passwordInput.style.borderColor = 'red';
            }

        } catch (error) {
            console.error('Ошибка: ' + error);
        }
    });
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    emailInput?.addEventListener('input', function () {
        emailInput.style.borderColor = '';
        document.getElementById("email-error").innerText = '';
    });

    passwordInput?.addEventListener('input', function () {
        passwordInput.style.borderColor = '';
        document.getElementById("password-error").innerText = '';
    });
}
