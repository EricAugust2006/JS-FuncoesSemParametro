console.log("Exercício 1: Desenvolva uma função que mostre no console a frase 'Hello World!'");
function helloWorld(){
    const hello = 'Hello World!';
    console.log(hello);
}
helloWorld();


console.log("Exercício 2: Desenvolva uma função para saber se o(a) aluno(a) possui métricas para virar monitor(a).");
//Requisitos:
let entregas = 110;
let entrevistas = 95;
let presenca = 98;
function verificarMonitor(entregas, entrevistas, presenca) {
    if (entregas >= 100 && entrevistas >= 100 && presenca >= 100) {
        console.log("Possível monitor(a).");
    } 
    else {
        console.log("Selecionar outro(a) aluno(a).");
    }
}
verificarMonitor(entregas, entrevistas, presenca);


console.log("Exercício 3: Desenvolva uma função que recebe três variáveis com valores numéricos e identifica qual deles é o maior.");
let numeroUm = 10;
let numeroDois = 43;
let numeroTres = 23;
function maiorNumero(numeroUm, numeroDois, numeroTres) {
    if (numeroUm > numeroDois && numeroUm > numeroTres) {
        console.log("O maior numero e: " + numeroUm);
    }
    else if (numeroDois > numeroUm && numeroDois > numeroTres) {
        console.log("O maior numero e: " + numeroDois);
    }
    else {
        console.log("O maior numero e: " + numeroTres);
    }
}
maiorNumero(numeroUm, numeroDois, numeroTres);


console.log("Exercício 4: Desenvolva uma função para mostrar no console a seguinte frase: 'Meu nome é -nome e sobrenome-, e tenho -idade- anos'.");
function informacao(){
    let name = "Joaquim";
    let surname = "Phoenix";
    let age = 30;
    let message = `Meu nome é ${name} ${surname}, e tenho ${age} anos`;
    console.log(message)
}
informacao();

console.log("Tudo feito!")