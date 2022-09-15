// a) Uma função que receba 2 números como parâmetros, e, dentro da função, faça a soma das duas entradas e imprima o resultado. Invoque a função e imprima no console o resultado.

function somarNumeros(num1,num2){
     return num1 + num2
}
console.log(somarNumeros(Number(prompt("Digite um número")),Number(prompt("Digite outro número"))))

// b) Uma função que recebe 2 números e imprime um booleano que informa se o primeiro número é maior ou igual ao segundo.

function booleano(numero1, numero2) {
    if (numero1 >= numero2) {
        console.log("O primeiro número é maior ou igual ao segundo", +numero1 >= numero2)
    }else{
        console.log("O primeiro número é maior ou igual ao segundo", +numero1 >= numero2)
    }    
}
booleano(Number(prompt("PRIMEIRO NÚMERO")),Number(prompt("SEGUNDO NÚMERO")))

// c) Uma função que receba um número e imprima se ele é par ou não

function numeroPar(n1) {
    if (n1%2 === 0 ) {
        console.log(`O número é Par`)
    }else{
        console.log("O número não é Par")
    }    
}
numeroPar(Number(prompt("Digite um número para saber se ele é par")))

// d) Uma função que recebe uma mensagem (string) como parâmetro e imprima o tamanho dessa mensagem, juntamente com uma versão dela contendo apenas letras maiúsculas.

function nome(string) {
    console.log("Tamanho da mensagem:", string.length);
    console.log(string.toUpperCase());    
}
nome(prompt("Digite uma mensagem e saiba: o tamanho dessa mensagem contando os espaços, juntamente com uma versão dela contendo apenas letras maiúsculas"))