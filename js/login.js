document.getElementById('login').addEventListener('submit', function(event) {
    event.preventDefault();  // Impede o envio tradicional do formulário

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Salva o nome de usuário no localStorage
        localStorage.setItem('username', username);

        // Exibe a mensagem de boas-vindas
        document.getElementById('message').textContent = `Bem-vindo, ${username}!`;

        // Esconde o formulário de login
        document.getElementById('loginForm').style.display = 'none';

        // Redireciona para a página inicial
        setTimeout(function() {
            window.location.href = 'index.html';  // Redireciona para a página inicial
        }, 2000);  // Espera 2 segundos para redirecionar
    } else {
        document.getElementById('message').textContent = 'Por favor, preencha todos os campos.';
    }
});
