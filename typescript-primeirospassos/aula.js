var texto = "Carlinhos";
console.log(texto);
function somarNumeros(num1, num2) {
    return num1 + num2;
}
console.log(somarNumeros(1, 2));
var Calculadora = /** @class */ (function () {
    function Calculadora() {
    }
    Calculadora.prototype.somar = function (num1, num2) {
        return num1 + num2;
    };
    Calculadora.prototype.subtrair = function (num1, num2) {
        return num1 - num2;
    };
    return Calculadora;
}());
var calc = new Calculadora();
console.log(calc.somar(3, 5));
