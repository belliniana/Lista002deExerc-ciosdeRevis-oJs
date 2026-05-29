const produtos2 = [
    { nome: "Notebook", preco: 2000 },
    { nome: "Celular", preco: 1500 }
];

const comDesconto = produtos2.map(p => ({
    ...p,
    preco: p.preco * 0.9
}));

console.log(comDesconto);