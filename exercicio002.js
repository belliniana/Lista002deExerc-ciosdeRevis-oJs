const produtos = [
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 120 }
];

const frasesPreco = produtos.map(
    p => `O produto ${p.nome} custa R$ ${p.preco}`
);
console.log(frasesPreco);
