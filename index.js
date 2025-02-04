
//desafio 1
let INDICE = 13;
let SOMA = 0;
let K = 0;

while (K < INDICE) {
    K = K + 1;
    SOMA = SOMA + K;
}

console.log(SOMA);



//desafio 2

function isFibonacci(num) {
    let a = 0, b = 1, temp;

    while (a <= num) {
        if (a === num) {
            return true;
        }
        temp = a + b;
        a = b;
        b = temp;
    }
    return false;
}

// Número a ser verificado (pode ser alterado ou vir de entrada do usuário)
const numero = 21; 

if (isFibonacci(numero)) 
    console.log(`${numero} pertence à sequência`)



//desafio 3
const faturamentoMensal = {
  "faturamento": [
    2500, 3000, 1000, 0, 5000, 7000, 0, 2000, 4500, 0,
    0, 3200, 4100, 5300, 6200, 0, 3100, 2700, 0, 3800,
    4900, 5700, 6000, 0, 3300, 5100, 7000, 8100, 0, 2900
  ]
};

// Filtrar os dias com faturamento maior que zero
const valoresValidos = faturamentoMensal.faturamento.filter(valor => valor > 0);

// Encontrar menor e maior valor de faturamento
const menorValor = Math.min(...valoresValidos);
const maiorValor = Math.max(...valoresValidos);

// Calcular a média mensal excluindo os dias sem faturamento
const soma = valoresValidos.reduce((acc, valor) => acc + valor, 0);
const mediaMensal = soma / valoresValidos.length;

// Contar os dias acima da média
const diasAcimaDaMedia = valoresValidos.filter(valor => valor > mediaMensal).length;

// Exibir resultados
console.log(`Menor faturamento: ${menorValor}`);
console.log(`Maior faturamento: ${maiorValor}`);
console.log(`Dias com faturamento acima da média: ${diasAcimaDaMedia}`);


//desafio 4
const faturamento = {
    "SP": 67836.43,
    "RJ": 36678.66,
    "MG": 29229.88,
    "ES": 27165.48,
    "Outros": 19849.53
};

// Calcula o faturamento total
const faturamentoTotal = Object.values(faturamento).reduce((acc, valor) => acc + valor, 0);

// Calcula e exibe o percentual de cada estado
console.log("Percentual de representação por estado:");
for (const estado in faturamento) {
    const percentual = (faturamento[estado] / faturamentoTotal) * 100;
    console.log(`${estado}: ${percentual.toFixed(2)}%`);
}



//desafio 5
function inverterString(str) {
    let stringInvertida = "";
    
    for (let i = str.length - 1; i >= 0; i--) {
        stringInvertida += str[i];
    }

    return stringInvertida;
}

// Definir a string a ser invertida (pode vir de entrada do usuário)
const texto = "Hello, World!";
const resultado = inverterString(texto);

console.log("String original:", texto);
console.log("String invertida:", resultado);
