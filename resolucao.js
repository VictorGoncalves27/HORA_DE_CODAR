function caixa() {
    var nome_do_carro = "Fusca"
    alert(`o nome do carro é ${nome_do_carro}`)
}

function nome() {
    var nome = prompt("Informe seu Nome");
    alert(`Ola, ${nome}`);
}



function idade() {

    var nome = prompt("Informe seu nome")
    var idade = prompt("Informe sua idade")
    alert(`Ola, ${nome}, sua idade é ${idade} `)

}

function retangulo() {

    var base = prompt(" Informe o valor da base ");
    var altura = prompt(" informe o valor da altura ");
    resultado = base * altura;
    alert(`a área do retangulo é ${resultado}`);
}

function quadrado() {

    var lado = prompt("Informe o valor do quadrado ")
    resultado = lado * lado;
    alert(`a área do quadrado é ${resultado}`)

}

function losango() {
    var diagonalmaior = parseInt(prompt("informe do Diagonal Maior"));
    var diagonalmenor = parseInt(prompt("informe o valor de Diagonal Menor"));
    var resultado = (diagonalmaior * diagonalmenor) / 2;
    alert(`a área do Losango é ${resultado}`)
}

function trapezio() {

    var basemaior = parseInt(prompt("informe o valro da Base Maior"));
    var basemenor = parseInt(prompt("informe o Valor da Base Menor"));
    var altura = parseInt(prompt("informe o valor da Altura "));
    resultado = ((basemaior + basemenor) * altura) / 2;
    alert(`a área do Trapezio é ${resultado}`)
}

function triangulo() {
    var base = parseInt(prompt("informe o valor da Base"))
    var altura = parseInt(prompt("Informe o valor da Altura"))
    resultado = (base * altura) / 2
    alert(`a área do triangulo é ${resultado}`)
}

function circulo() {

    var pi = Math.PI
    var raio = parseFloat(prompt("Informe o valor de Raio:"));
    var resultado = (pi * (raio * raio));
    alert(`a área do Circulo é ${resultado.toFixed(2)}`);
    /* alert(resultado.toFixed(2)); */


}