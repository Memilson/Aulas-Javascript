/* Concatenação de Strings */
const nome = "Rebeca";

// Concatenação usando o operador + 
const concatenacao = "Olá " + nome + "!";
console.log(concatenacao); // Output: Olá Rebeca!

// Template Literals (templates literais)
const template = `
   Olá 
   ${nome}!
`;
console.log(template); // Output: Olá Rebeca!

// Expressões dentro de template literals
console.log(`1 + 1 = ${1 + 1}`); // Output: 1 + 1 = 2

// Função que converte texto para maiúsculas
const up = texto => texto.toUpperCase();
console.log(`ei.. ${up('cuidado')}!`); // Output: ei.. CUIDADO!