
var texto: string = "Carlinhos"


console.log(texto)

function somarNumeros(num1: number, num2: number){
    return num1 + num2
}

console.log(somarNumeros(1,2))

class Calculadora{
    somar(num1: number, num2: number){
        return num1 + num2
    }

    subtrair(num1: number, num2: number){
        return num1 - num2
    }
}

var calc = new Calculadora()

console.log(calc.somar(3,5))