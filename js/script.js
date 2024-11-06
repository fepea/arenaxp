// Função para mostrar/ocultar o menu de usuário
function toggleUserMenu() {
    const userMenu = document.getElementById("userMenu");
    userMenu.style.display = (userMenu.style.display === "block") ? "none" : "block";
}

// Função de Logout
function logout() {
    // Remove os dados de login do localStorage
    localStorage.removeItem('userEmail');
    localStorage.removeItem('username');

    // Redireciona para a página de login
    window.location.href = "login.html";
}

// Verificar se o usuário está logado
document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    
    if (username) {
        // Exibir o nome do usuário se estiver logado
        document.getElementById('welcomeMessage').textContent = username;
    } else {
        // Se não estiver logado, redireciona para o login
        window.location.href = "login.html";
    }
});
