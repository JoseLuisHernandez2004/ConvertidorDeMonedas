var  valor1= 0;
var valordolar = 0;

function cValor1()
{
    valor1=parseFloat(document.getElementById("valor1").value);
}
function cValor2()
{
    valordolar=parseFloat(document.getElementById("valor2").value);
}

function calcularPeso_Dolar()
{
    var CalcularPeso_Dolar=valor1 * valordolar;
    document.getElementById("resultado").innerHTML="Resultado: " + CalcularPeso_Dolar + " Pesos";
}
function calcularDolar_Peso()
{
    var CalcularDolar_pesos=valordolar/valor1;
    document.getElementById("resultado").innerHTML="Resultado: " + CalcularDolar_pesos + " Dolares";
}
function limpiarFormulario()
{
     var calcularPeso_Dolar="";
     document.getElementById("resultado").innerHTML=calcularPeso_Dolar;
     var calcularDolar_pesos ="";
     document.getElementById("resultado").innerHTML=calcularDolar_pesos;

     document.getElementById("Resultado").reset();
}
