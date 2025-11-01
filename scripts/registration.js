// localStorage.clear();
// console.log("localStorage cleared");

(() => {
    'use strict';
    const forms = document.querySelectorAll('form');
    Array.from(forms).forEach(form => {
    form.addEventListener('submit', event => {
        event.preventDefault();
        event.stopPropagation();

        const regError = document.getElementById('reg-error');

        const email = document.getElementById('email');
        const username = document.getElementById('username');
        const password = document.getElementById('password');
        const repeatPassword = document.getElementById('repeat-password');

        let valid = true;

        let users = getUsers();

        //check for empty username
        if (!username.value) {
            username.classList.add('is-invalid');
            valid = false;
        } else {
            username.classList.remove('is-invalid');
        }
    
        //check for empty email
        if (!email.value.trim() || !email.value.trim().includes('@')) {
            email.classList.add('is-invalid');
            valid = false;
        } else {
            email.classList.remove('is-invalid');
        }

        //check for empty password field
        if (!password.value || password.value.length < 6) {
            password.classList.add('is-invalid');
            valid = false;
        } else {
            password.classList.remove('is-invalid');
        }

        //check for macthing passwords
        if (!password.value || password.value !== repeatPassword.value) {
            document.getElementById('repeat-password').classList.add('is-invalid');
            valid = false;
        } else {
            document.getElementById('repeat-password').classList.remove('is-invalid');
        }

        //check for existing user
        if (users.some(u => u.email === email.value || u.username === username.value)) {
            regError.classList.remove('d-none')
            valid = false;
        }

        if(!valid) {
            return;
        }

        let usernameValue = username.value;
        let passwordValue = password.value;
        let emailValue = email.value;

        users.push({ emailValue, usernameValue, passwordValue });
        saveUsers(users);
        form.reset();
        window.location.href = 'profile.html';
    }, false);
    });
})();

function getUsers() {
    return JSON.parse(localStorage.getItem('users') || '[]');
}

function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}