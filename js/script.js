// Salvar e recuperar usuário
function registerUser(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (email && username && password.length >= 5) {
        localStorage.setItem('userEmail', email);
        localStorage.setItem('userName', username);
        window.location.href = 'index.html'; // Redireciona para a página inicial
    } else {
        alert('Por favor, preencha todos os campos corretamente.');
    }
}

function inscreverTorneio() {
    const userEmail = localStorage.getItem('userEmail');
    if (userEmail) {
        window.location.href = 'pagamento.html'; // Redireciona para a página de pagamento
    } else {
        window.location.href = 'login.html'; // Redireciona para o login
    }
}

function logout() {
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    window.location.href = 'index.html'; // Redireciona para a página inicial
}

function toggleSettingsMenu() {
    const menu = document.getElementById('settingsMenu');
    menu.style.display = menu.style.display === 'none' ? 'block' : 'none';
}

function saveSettings() {
    const newUserName = document.getElementById('userName').value;
    localStorage.setItem('userName', newUserName);
    alert('Configurações salvas!');
}
