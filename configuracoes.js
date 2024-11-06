document.addEventListener('DOMContentLoaded', function() {
    // Verifica se o usuário está logado
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        // Preenche o nome de usuário no campo
        document.getElementById('username').value = savedUsername;
    }

    // Evento para salvar as configurações
    document.getElementById('saveBtn').addEventListener('click', function() {
        const newUsername = document.getElementById('username').value;
        const profileImage = document.getElementById('profileImage').files[0];

        if (newUsername) {
            localStorage.setItem('username', newUsername);  // Salva o novo nome de usuário
        }

        if (profileImage) {
            // Aqui você pode adicionar lógica para salvar a imagem (upload real seria mais complexo)
            alert('Imagem de perfil atualizada!');
        }

        alert('Configurações salvas!');
    });

    // Função para fazer o logout
    document.getElementById('logoutBtn').addEventListener('click', function() {
        localStorage.removeItem('username');  // Remove o nome de usuário do localStorage
        window.location.href = 'login.html';  // Redireciona para a página de login
    });
});
