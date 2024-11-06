document.addEventListener('DOMContentLoaded', function() {
    // Verifica se o nome de usuário está salvo no localStorage
    const savedUsername = localStorage.getItem('username');

    if (savedUsername) {
        // Exibe a mensagem de boas-vindas
        document.getElementById('message').textContent = `Bem-vindo de volta, ${savedUsername}!`;

        // Exibe o ícone de usuário
        document.getElementById('userIcon').style.display = 'block';

        // Esconde o formulário de login
        document.getElementById('loginForm').style.display = 'none';
    }
});
