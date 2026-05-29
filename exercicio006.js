const idades = [12, 18, 25, 10];

const classificacao = idades.map(idade =>
    idade < 18 ? "Menor" : "Maior"
);

console.log(classificacao);