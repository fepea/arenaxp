document.addEventListener('DOMContentLoaded', function() {
    // Verifica se já existe um nome de usuário salvo no localStorage
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        // Se o usuário estiver logado, redireciona para a página inicial
        window.location.href = 'index.html';
    }

    // Evento de login
    document.getElementById('loginBtn').addEventListener('click', function() {
        const username = document.getElementById('usernameInput').value;

        if (username) {
            // Salva o nome de usuário no localStorage
            localStorage.setItem('username', username);

            // Exibe a mensagem de boas-vindas
            document.getElementById('welcomeMessage').style.display = 'block';
            document.getElementById('userNameDisplay').innerText = username;

            // Oculta o formulário de login
            document.getElementById('loginForm').style.display = 'none';

            // Exibe o ícone de usuário no cabeçalho
            document.getElementById('userIcon').style.display = 'block';

            // Redireciona para a página inicial após 2 segundos
            setTimeout(function() {
                window.location.href = 'index.html';
            }, 2000);
        } else {
            alert('Por favor, digite um nome de usuário!');
        }
    });
});
