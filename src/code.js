function updateCodeValue() {
    const hiddenInput = document.getElementById('code-value');
    const digitInputs = Array.from(document.querySelectorAll('[data-code-digit]'));

    if (!hiddenInput || digitInputs.length === 0) {
        return;
    }

    hiddenInput.value = digitInputs.map((input) => input.value).join('');
}

function focusDigit(index) {
    const digitInputs = Array.from(document.querySelectorAll('[data-code-digit]'));
    const target = digitInputs[index];

    if (target) {
        target.focus();
        target.select();
    }
}

export function setupCodeVerification() {
    const form = document.getElementById('code-form');

    if (!form || form.dataset.verificationReady === 'true') {
        return;
    }

    form.dataset.verificationReady = 'true';

    const digitInputs = Array.from(document.querySelectorAll('[data-code-digit]'));
    const codeError = document.getElementById('code-error');

    digitInputs.forEach((input, index) => {
        input.addEventListener('input', function () {
            this.value = this.value.replace(/\D/g, '').slice(0, 1);
            this.style.borderColor = '';

            if (codeError) {
                codeError.innerText = '';
            }

            updateCodeValue();

            if (this.value && index < digitInputs.length - 1) {
                focusDigit(index + 1);
            }
        });

        input.addEventListener('keydown', function (event) {
            if (event.key === 'Backspace' && !this.value && index > 0) {
                focusDigit(index - 1);
            }

            if (event.key === 'ArrowLeft' && index > 0) {
                event.preventDefault();
                focusDigit(index - 1);
            }

            if (event.key === 'ArrowRight' && index < digitInputs.length - 1) {
                event.preventDefault();
                focusDigit(index + 1);
            }
        });

        input.addEventListener('paste', function (event) {
            event.preventDefault();

            const pastedText = event.clipboardData.getData('text').replace(/\D/g, '').slice(0, 6);

            if (!pastedText) {
                return;
            }

            pastedText.split('').forEach((digit, digitIndex) => {
                if (digitInputs[digitIndex]) {
                    digitInputs[digitIndex].value = digit;
                    digitInputs[digitIndex].style.borderColor = '';
                }
            });

            updateCodeValue();
            focusDigit(Math.min(pastedText.length, digitInputs.length) - 1);

            if (codeError) {
                codeError.innerText = '';
            }
        });
    });

    form.addEventListener('submit', async function (event) {
        event.preventDefault();

        const code = digitInputs.map((input) => input.value).join('');

        digitInputs.forEach((input) => {
            input.style.borderColor = '';
        });

        if (codeError) {
            codeError.innerText = '';
        }

        if (code.length !== 6) {
            digitInputs.forEach((input) => {
                input.style.borderColor = 'red';
            });

            if (codeError) {
                codeError.innerText = 'Введите 6-значный код';
            }

            return;
        }

        try {
            const response = await fetch('http://localhost:8086/auth/verify-code', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ code })
            });

            const text = await response.text();

            if (text === 'Успешно') {
                window.location.href = '/Index.html';
                return;
            }

            digitInputs.forEach((input) => {
                input.style.borderColor = 'red';
            });

            if (codeError) {
                codeError.innerText = text || 'Неверный код';
            }
        } catch (error) {
            console.error('Ошибка: ' + error);

            digitInputs.forEach((input) => {
                input.style.borderColor = 'red';
            });

            if (codeError) {
                codeError.innerText = 'Не удалось проверить код';
            }
        }
    });
}
