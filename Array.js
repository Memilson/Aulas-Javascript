/* Arrays */

// Criação de um array com valores numéricos
const valores = [7.7, 8.9, 6.3, 9.2];

// Acessando elementos do array pelo índice
console.log(valores[0], valores[3]); // Output: 7.7 9.2

// Tentativa de acessar um índice que não existe
console.log(valores[4]); // Output: undefined

// Adicionando um valor no índice 4
valores[4] = 10;
console.log(valores); // Output: [7.7, 8.9, 6.3, 9.2, 10]

// Verificando o tamanho do array
console.log(valores.length); // Output: 5

// Adicionando vários tipos de valores ao final do array
valores.push({id: 3}, false, null, 'teste');
console.log(valores); // Output: [7.7, 8.9, 6.3, 9.2, 10, {id: 3}, false, null, 'teste']

// Removendo e retornando o último valor do array
console.log(valores.pop()); // Output: 'teste'

// Deletando o valor no índice 0
delete valores[0];
console.log(valores); // Output: [undefined, 8.9, 6.3, 9.2, 10, {id: 3}, false, null]

// Verificando o tipo do array
console.log(typeof valores); // Output: object
