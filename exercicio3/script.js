// Crie 4 funções, cada uma deve receber dois parâmetros numéricos e retornar o valor uma das operações básicas (soma, subtração, multiplicação e divisão).

// Em seguida, peça para o usuário inserir dois números e chame essas 4 funções com esses valores inputados pelo usuário sendo o argumento. Por fim, imprima no console o resultado das operações

function somarNumeros(num1,num2){
    return num1 + num2
}

function subtrairNumeros(num1,num2){
    return num1 - num2
}

function multiplicarNumeros(num1,num2){
    return num1 * num2
}

function dividirNumeros(num1,num2){
    return num1 / num2
}

const num1 = Number(prompt("Digite um Número"))
const num2 = Number(prompt("Digite outro Número"))

console.log(`A soma entre os números é: ${somarNumeros(num1, num2)}\n A subtração entre os números é: ${subtrairNumeros(num1, num2)}\n A multiplicação entre os números é: ${multiplicarNumeros(num1, num2)}\n A divisão entre os números é: ${dividirNumeros(num1, num2)}`)