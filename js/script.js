document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        localStorage.setItem('username', username);
        document.getElementById('message').textContent = `Bem-vindo, ${username}!`;
    } else {
        document.getElementById('message').textContent = 'Por favor, preencha todos os campos.';
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        document.getElementById('message').textContent = `Bem-vindo de volta, ${savedUsername}!`;
    }
});
