    // //  a) Declare uma função que imprima Olá, [SEU NOME]!. Chame esta função.

    // function digaOiNome(nome){
    // console.log(`Olá, ${nome}`)
    // }
    // digaOiNome(prompt("Digite seu nome!"))

    // // b) Declare uma função que imprima a tabuada do 6. Chame esta função.

    // function tabuada(array){
    //     for (let i of array){
    //         console.log(i*6)
    //     }
    // }
    // const final = tabuada([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])

    // c) Comente as funções criadas acima, e reescreva-as utilizando expressões de função, ou arrow functions
    
    const digaOiNome = (nome) => {
        console.log(`Olá, ${nome}`)
        }
        digaOiNome(prompt("Digite seu nome!"))

        //------------ARROW FUNCTIONS------------

        const tabuada = (array) => {
            for (let i of array){
                console.log(i*6)
            }
        }
        tabuada([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])