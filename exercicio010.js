const valores = [10, 20, 30, 40];

const porcentagens = valores.map((n, i, arr) => ({
    valor: n,
    porcentagem: (n / arr.reduce((a, b) => a + b, 0)) * 100
}));

console.log(porcentagens);