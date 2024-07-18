/* Valores Booleanos */
let isAtivo = false;
console.log(isAtivo); // Output: false

isAtivo = true;
console.log(isAtivo); // Output: true

// Convertendo para boolean usando !!
isAtivo = 1;
console.log(!!isAtivo); // Output: true

// Exemplos de valores que são considerados verdadeiros
console.log('Os verdadeiros...');
console.log(!!3); // Output: true
console.log(!!-1); // Output: true
console.log(!!''); // Output: false (string vazia é falsa)
console.log(!![]); // Output: true (array vazio é verdadeiro)
console.log(!!{}); // Output: true (objeto vazio é verdadeiro)
console.log(!!Infinity); // Output: true
console.log(!!(isAtivo = true)); // Output: true

// Exemplos de valores que são considerados falsos
console.log('Os falsos...');
console.log(!!0); // Output: false
console.log(!!``); // Output: false
console.log(!!null); // Output: false
console.log(!!NaN); // Output: false
console.log(!!undefined); // Output: false
console.log(!!(isAtivo = false)); // Output: false

// Uso do operador lógico OR (||)
console.log("Pra finalizar");
console.log('' || null || 0 || '123'); // Output: 123

let xumbador = '';
console.log(xumbador || 'Desconhecido'); // Output: Desconhecido