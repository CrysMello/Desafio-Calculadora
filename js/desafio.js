// Desafio Reprograma - Desenvolver uma calculadora que calcule o valor total do seu projeto 
var spanHora = document.querySelector("#resposta"); 
var inputGanhoPorHora = document.querySelector("#valor-hora"); 
var inputHorasPorProjeto = document.querySelector("#horas-projeto"); 

function calcular() { 
    var qtdTotalDeHoras = inputHorasPorProjeto.valueAsNumber ; 
    var valorDeHora = (inputGanhoPorHora.valueAsNumber * qtdTotalDeHoras).toFixed(2) 
    spanHora.textContent = "R$" + valorDeHora; 

}