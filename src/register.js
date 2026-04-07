

export function registerUser() {
    
    const form = document.getElementById("form"); 

    form.addEventListener('submit', async function(event) {
        event.preventDefault();

        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");
        const passwordInput = document.getElementById("password");
        const confirmInput = document.getElementById("confirm-password");
        const termsBox = document.getElementById("terms");


        const nameError = document.getElementById("name-error");
        const emailError = document.getElementById("email-error");
        const passwordError = document.getElementById("password-error");
        const confirmError = document.getElementById("confirm-error");
        const termsError = document.getElementById("terms-error");

        const name = nameInput.value;
        const email = emailInput.value;
        const password = passwordInput.value;
        const confirm = confirmInput.value;

        let hasError = false;


        nameInput.addEventListener('input', function(event){
            nameInput.style.borderColor = '#ff6a00';
            nameError.innerText = '';
        });

        emailInput.addEventListener('input', function(event){
            emailInput.style.borderColor = '#ff6a00';
            emailError.innerText = '';
        });

        passwordInput.addEventListener('input', function(event){
            passwordInput.style.borderColor = '#ff6a00';
            passwordError.innerText = '';
        });

        confirmInput.addEventListener('input', function(event){
            confirmInput.style.borderColor = '#ff6a00';
            confirmError.innerText = '';
        });
        termsBox.addEventListener('change', function(event){
            termsError.innerText = '';
        });

        if(name.length == 0) {
            nameInput.style.borderColor = 'red';
            nameError.innerText = 'Заполните поле';
            hasError = true;
        }

        if(!email.includes('@') || !email.includes('.') || email.legth < 32) {
            emailInput.style.borderColor = 'red';
            emailError.innerText = 'Некорректная почта';
            hasError = true;
        }

        if(password.length < 6) {
            passwordInput.style.borderColor = 'red';
            passwordError.innerText = 'Минимум 6 символов';
            hasError = true;
        }

        if(confirm.length < 6 || !confirm == password) {
            confirmInput.style.borderColor = 'red';
            confirmError.innerText = 'Пароли не совпадают';
            hasError = true;
        }

        if(!termsBox.checked) {
            termsError.innerText = 'Подтвердите согласие';
            hasError = true;
        }

        if(hasError) {
            return;
        }

        console.log(name, email, password, confirm);

        const newPost = {
            name: name,
            email: email,
            password: password,
            confirm: confirm
        }

        try {
            const response = await fetch("", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(newPost)
            });

            const text = await response.text();

        } catch(error) {
            console.error("Ошибка: " + error);
        }
    });
}

