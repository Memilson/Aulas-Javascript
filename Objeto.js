/* Objetos */

// Criação de um objeto vazio e adicionando propriedades dinamicamente
const produto = {};
produto.nome = "Celular Ultra Mega Pingoludo";
produto.preco = 5000;

// Evitar atributos com espaço; isso requer o uso de colchetes e strings
produto['Desconto PIKA DEMAIS SÓ KKKKKKKKKKKKKKK '] = 0.40; 
console.log(produto); // Output: { nome: 'Celular Ultra Mega Pingoludo', preco: 5000, 'Desconto PIKA DEMAIS SÓ KKKKKKKKKKKKKKK ': 0.4 }

// Criação de um objeto com propriedades aninhadas
const produto2 = {
    nome: "Camisa Polo",
    preco: 79.90,
    obj: {
        TESAO: 10000,
        obj: {
            TesaoDemais: 10000000
        }
    }
};
console.log(produto2); // Output: { nome: 'Camisa Polo', preco: 79.9, obj: { TESAO: 10000, obj: { TesaoDemais: 10000000 } } }

// Exemplo de JSON
const produto2Json = '{"nome": "Camisa Polo", "preco": 79.90}';
console.log(produto2Json); // Output: {"nome": "Camisa Polo", "preco": 79.90}

// Convertendo o JSON de volta para um objeto
const produto2Obj = JSON.parse(produto2Json);
console.log(produto2Obj); // Output: { nome: 'Camisa Polo', preco: 79.9 }
