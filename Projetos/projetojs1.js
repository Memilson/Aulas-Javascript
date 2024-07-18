// Função para gerar uma senha aleatória com base no tamanho especificado
function GerarSenha(tamanho) {
    // Definição dos caracteres possíveis para a senha
    const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?';
    
    // Inicialização da variável que vai armazenar a senha gerada
    let senha = '';

    // Loop para gerar cada caractere da senha até atingir o tamanho desejado
    for (let i = 0; i < tamanho; i++) {
        // Gerando um índice aleatório dentro do comprimento da string 'caracteres'
        const selecaoAleatoria = Math.floor(Math.random() * caracteres.length);
        
        // Concatenando o caractere selecionado aleatoriamente à senha
        senha += caracteres[selecaoAleatoria];
    }
    
    // Retornando a senha gerada
    return senha;
}

// Definição do tamanho desejado para a senha
var tamanhoSenha = 1240;

// Chamando a função GerarSenha() para criar uma nova senha com o tamanho especificado
const novasenha = GerarSenha(tamanhoSenha);

// Exibindo a nova senha gerada no console
console.log(novasenha);
