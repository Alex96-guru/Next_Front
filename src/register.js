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

export function showHideConfirmPassword(target) {
    const reInput = document.getElementById('confirm-password');

    if (reInput.getAttribute('type') === 'password') {
        target.classList.add('view');
        reInput.setAttribute('type', 'text');
    } else {
        target.classList.remove('view');
        reInput.setAttribute('type', 'password');
    }
}

export function registerUser() {
    const form = document.getElementById('form');

    if (!form || form.dataset.validationReady === 'true') {
        return;
    }

    form.dataset.validationReady = 'true';

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const passwordInput = document.getElementById('password');
        const confirmInput = document.getElementById('confirm-password');
        const termsBox = document.getElementById('terms');

        const nameError = document.getElementById('name-error');
        const emailError = document.getElementById('email-error');
        const passwordError = document.getElementById('password-error');
        const confirmError = document.getElementById('confirm-error');
        const termsError = document.getElementById('terms-error');

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value;
        const confirm = confirmInput.value;

        let hasError = false;

        nameInput.style.borderColor = '';
        emailInput.style.borderColor = '';
        passwordInput.style.borderColor = '';
        confirmInput.style.borderColor = '';

        nameError.innerText = '';
        emailError.innerText = '';
        passwordError.innerText = '';
        confirmError.innerText = '';
        termsError.innerText = '';

        if (name.length === 0) {
            nameInput.style.borderColor = 'red';
            nameError.innerText = 'Заполните поле';
            hasError = true;
        }

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

        if (confirm.length < 6) {
            confirmInput.style.borderColor = 'red';
            confirmError.innerText = 'Минимум 6 символов';
            hasError = true;
        } else if (confirm !== password) {
            confirmInput.style.borderColor = 'red';
            confirmError.innerText = 'Пароли не совпадают';
            hasError = true;
        }

        if (!termsBox.checked) {
            termsError.innerText = 'Подтвердите согласие';
            hasError = true;
        }

        let terms = true;

        if (hasError) {
            return;
        }

        const newPost = {
            name: name,
            email: email,
            password: password,
            confirm: confirm,
            terms: terms
        };

        try {
            const response = await fetch('http://26.167.71.18:8086/auth/register', {
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

            emailInput.style.borderColor = 'red';
            emailError.innerText = text;
        } catch (error) {
            console.error('Ошибка: ' + error);
        }
    });

    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmInput = document.getElementById('confirm-password');
    const termsBox = document.getElementById('terms');

    nameInput?.addEventListener('input', function () {
        nameInput.style.borderColor = '';
        document.getElementById("name-error").innerText = '';
    });

    emailInput?.addEventListener('input', function () {
        emailInput.style.borderColor = '';
        document.getElementById("email-error").innerText = '';
    });

    passwordInput?.addEventListener('input', function () {
        passwordInput.style.borderColor = '';
        document.getElementById("password-error").innerText = '';
    });

    confirmInput?.addEventListener('input', function () {
        confirmInput.style.borderColor = '';
        document.getElementById("confirm-error").innerText = '';
    });

    termsBox?.addEventListener('change', function () {
        document.getElementById("terms-error").innerText = '';
    });
}
