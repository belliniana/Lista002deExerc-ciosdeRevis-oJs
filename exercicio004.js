const numeros = [1, 2, 3, 4, 5];

const infoNumeros = numeros.map(n => ({
    valor: n,
    par: n % 2 === 0
}));

console.log(infoNumeros);