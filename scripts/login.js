function getUsers() {
    return JSON.parse(localStorage.getItem('users') || '[]');
}

const users = getUsers();
console.log(users);

const form = document.querySelector('form');
const loginError = document.getElementById('login-error');

form.addEventListener('submit', e => {
  e.preventDefault();
  
  const username = document.getElementById('username').value;
  const password = document.getElementById('password').value;
  

  const user = users.find(u => u.usernameValue === username && u.passwordValue === password);

  if (user) {
    loginError.classList.add('d-none');
    localStorage.setItem('currentUser', JSON.stringify(user));
    window.location.href = 'profile.html';
  } else {
    loginError.classList.remove('d-none');
  }
});
