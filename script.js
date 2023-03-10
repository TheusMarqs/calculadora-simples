var valor1 = document.getElementById('v1').value;
var valor2 = document.getElementById('v2').value;
var resultado = document.getElementById('resultado').value;
var resultado_soma;

function Somar() {
    alert("Click!!")
    resultado_soma = valor1 + valor2;
    resultado = innerHtml (resultado_soma);
}