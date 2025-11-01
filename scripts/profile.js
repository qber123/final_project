const theme = localStorage.getItem("theme");
console.log(theme);

const exitButton = document.getElementById('exit_button');

exitButton.addEventListener('click', function(){
    window.location.href = 'login.html';
});