document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Impede o envio do formulário e recarregamento da página

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        // Salva o nome de usuário no localStorage
        localStorage.setItem('username', username);

        // Exibe a mensagem de boas-vindas
        document.getElementById('message').textContent = `Bem-vindo, ${username}!`;

        // Esconde o formulário de login
        document.getElementById('loginForm').style.display = 'none';

        // Exibe o ícone de usuário (se já tiver o ícone)
        document.getElementById('userIcon').style.display = 'block';

        // Redireciona para a página inicial
        setTimeout(function() {
            window.location.href = 'index.html';  // Substitua 'index.html' pelo caminho correto
        }, 2000);  // Espera 2 segundos para o redirecionamento
    } else {
        document.getElementById('message').textContent = 'Por favor, preencha todos os campos.';
    }
});

// Exibe a mensagem de boas-vindas caso o usuário já esteja logado
document.addEventListener('DOMContentLoaded', function() {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        document.getElementById('message').textContent = `Bem-vindo de volta, ${savedUsername}!`;

        // Exibe o ícone de usuário
        document.getElementById('userIcon').style.display = 'block';
    }
});
