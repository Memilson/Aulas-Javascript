// script.js

// Função para gerar uma senha aleatória com base no tamanho especificado
function GerarSenha(tamanho) {
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    let senha = '';

    for (let i = 0; i < tamanho; i++) {
        const selecaoAleatoria = Math.floor(Math.random() * caracteres.length);
        senha += caracteres[selecaoAleatoria];
    }

    return senha;
}

// Capturando o formulário pelo ID
const formSenha = document.getElementById('formSenha');

// Adicionando um listener para o evento submit do formulário
formSenha.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o comportamento padrão de enviar o formulário

    // Capturando o valor do campo tamanhoSenha
    const tamanhoSenha = document.getElementById('tamanhoSenha').value;

    // Gerando uma nova senha com o tamanho capturado
    const novaSenha = GerarSenha(parseInt(tamanhoSenha));

    // Exibindo a senha gerada na página
    const senhaOutput = document.getElementById('novaSenha');
    senhaOutput.textContent = novaSenha;
});
