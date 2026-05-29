const api = [
    { id: 1, nome: "Ana", idade: 20, cidade: "SP" },
    { id: 2, nome: "João", idade: 25, cidade: "RJ" }
];

const simplificado = api.map(({ id, nome }) => ({
    id,
    nome
}));

console.log(simplificado);
