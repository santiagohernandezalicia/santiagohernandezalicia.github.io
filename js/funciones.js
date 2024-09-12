var elemento = 0;
function capturar(){
//agregamos elementos de forma vertical
var row = document.getElementById("renglon");
var valor = row.insertCell(-1);
//agregamos valor al elemento
var row2 = document.getElementById("renglon2");
var valor2 = row2.insertCell(-1);
valor2.innerHTML = document.getElementById("datos").value;

//agregamos los elementos de forma vertical
var columna = document.getElementById("tablaV");
var renglonV = columna.insertRow(-1);
var valorV = renglonV.insertCell(0);
valorV.innerHTML = document.getElementById("datos").value;

document.getElementById("arreglo").innerHTML = `Capture el elemento [${elemento}]`;
valor.innerHTML =`[${elemento}]`;
elemento++;
if (elemento >= 9) {
    document.getElementById("datos").disabled = true;
    document.getElementById("boton").disabled = true;
}
}

function reiniciar(){
    document.getElementById("datos").disabled = false;
    document.getElementById("boton").disabled = false;
    document.getElementById("arreglo").innerHTML = `Capture el elemento [0]`;
    elemento = 0;
    valor = 0;
    valor2 = 0;
    valorV = 0;
    document.getElementById("renglon").innerHTML = "";
    document.getElementById("renglon2").innerHTML = "";
    document.getElementById("renglon2").innerHTML = "";

}
