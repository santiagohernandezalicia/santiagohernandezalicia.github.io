const palabrasAleatorias = [
    "manzana", "sol", "cielo", "montaña", "playa", "gato", "libro", "nube",
    "jardín", "avión", "fuego", "estrella", "piedra", "lago", "tren"
];

function Aleatorio() {
    document.getElementById("Elemento").value = palabrasAleatorias[Math.floor(Math.random() * palabrasAleatorias.length)];
}

function CambioTexto() {
    var texto = document.getElementById("Elemento").value;
    document.getElementById("ipush").value = `Push(${texto})`;
}

function Push() {
    //validamos que el input no sea igual a una cadena vacia o este compuesta por espacios en blanco
    if (document.getElementById("Elemento").value.trim() != "") {
        document.getElementById("mensaje").innerHTML = "";

        //La linea 15 crea un nuevo renglon que se agrega a la tabla
        var renglon = document.createElement("tr");
        var celda1 = document.createElement("td");
        var celda2 = document.createElement("td");
        celda2.style.border = "1px solid black";
        celda1.textContent = "tope->";
        celda2.textContent = document.getElementById("Elemento").value;
        renglon.appendChild(celda1);
        renglon.appendChild(celda2);
        var rt = document.getElementById("tabla");

        if (rt.hasChildNodes()) {
            document.getElementById("tabla").firstChild.firstChild.textContent = "";
        }
        rt.insertBefore(renglon, rt.children[0]);
    } else {
        document.getElementById("mensaje").innerHTML = "No se aceptan cadenas vacias";
    }
}
//-------------------------------------------------------------------------
function Pop() {
    var rt = document.getElementById("tabla");
    if (rt.hasChildNodes()) {
        document.getElementById("mensaje").innerHTML = `Se elimino del tope ${rt.firstChild.childNodes[1].textContent}`;
        rt.removeChild(rt.firstChild);
        document.getElementById("tabla").firstChild.textContent = "tope -->";

    } else {
        document.getElementById("mensaje").innerHTML = "No se aceptas cadenas vacias";
    }
}
function Peek() {
    var rt = document.getElementById("tabla");
    if (rt.hasChildNodes()) {
        document.getElementById("mensaje").innerHTML = `En el tope de la pila se encuentra ${rt.firstChild.childNodes[1].textContent}`;
        document.getElementById("tabla").firstChild.textContent = "tope -->";

    } else {
        document.getElementById("mensaje").innerHTML = "No hay elementos en la pila";
    }
}
