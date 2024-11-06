// Função para alternar a visibilidade do menu de configurações
function toggleSettingsMenu() {
    const menu = document.getElementById('settingsMenu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

// Função de logout (remover usuário do armazenamento local e redirecionar para a página inicial)
function logout() {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    window.location.href = 'index.html'; // Redireciona para a página inicial
}

// Função para mostrar o ícone de usuário se o usuário estiver logado
document.addEventListener('DOMContentLoaded', function() {
    const savedUserName = localStorage.getItem('userName');
    if (savedUserName) {
        document.getElementById('userIcon').style.display = 'block';  // Mostrar ícone
        document.querySelector('header nav ul li a[href="login.html"]').style.display = 'none';  // Ocultar link de login
    }
});
