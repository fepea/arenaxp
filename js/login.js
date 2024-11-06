document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o comportamento padrão de envio do formulário

    const email = document.getElementById('email').value;
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Verificação simples para garantir que o email, nome de usuário e senha foram preenchidos corretamente
    if (email && username && password.length >= 5) {
        // Armazenando os dados do usuário no localStorage
        localStorage.setItem('userEmail', email);
        localStorage.setItem('username', username);
        
        // Redireciona o usuário para a página principal após login bem-sucedido
        window.location.href = "index.html"; // Redireciona para a página inicial
    } else {
        document.getElementById('message').textContent = "Por favor, preencha todos os campos corretamente.";
    }
});
