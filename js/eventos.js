function inscreverTorneio() {
    const userEmail = localStorage.getItem('userEmail');
    
    if (!userEmail) {
        window.location.href = "login.html"; // Redireciona para login se o usuário não estiver logado
    } else {
        window.location.href = "pagamento.html"; // Redireciona para a página de pagamento
    }
}
