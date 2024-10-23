var control = true;
var intentos = 0;
function Chturn(boton) {
    boton.disabled = true;
    boton.value = control ? "O" : "x"
    document.getElementById("turno").innerHTML = control ? "Turno X" : "Turno O"
    control = !control;
    Verificar();
}
function Verificar() {
    if (++intentos == 9) {
        document.getElementById("turno").innerHTML = `Empate`;
        Dall()
    }
    var botones = document.querySelectorAll("input[type = button]");
    if (botones[0].value == botones[1].value && botones[1].value == botones[2].value && botones[0].value != "") {
        document.getElementById("turno").innerHTML = `Gana ${botones[0].value}`;
        Dall()
        const Style = document.createElement("style")
        Style.textContent = `  tr:nth-child(1)::after{
    content: ""; /*En realidad es un texto al que se le agrega un fondo el vual es la linea*/
    position: absolute; /* Establece lo que se tomara en cuenta para dibujar la linea*/
    top: 50%; /*Estable el punto de particion en el renglon para dibujar la linea*/
    left: 0; /*Establece la longitud de la linea de izquierda a derecha*/
    right: 0; /*Establece la longitud de la linea de derecha a izquierda*/
    height: 10px; /* Estable el grosor de la linea*/
    background-color: darkred; /*Colo de la linea*/
    z-index: 1; /*Establece la linea por encima de los objetos*/
    pointer-events: none; /*Para que la linea no intefiera con los botones*/
}`;
        document.head.appendChild(Style);

    }
    else if (botones[3].value == botones[4].value && botones[4].value == botones[5].value && botones[3].value != "") {
        document.getElementById("turno").innerHTML = `Gana ${botones[3].value}`;
        Dall()
        const Style = document.createElement("style")
        Style.textContent = `  tr:nth-child(2)::after{
    content: ""; /*En realidad es un texto al que se le agrega un fondo el vual es la linea*/
    position: absolute; /* Establece lo que se tomara en cuenta para dibujar la linea*/
    top: 50%; /*Estable el punto de particion en el renglon para dibujar la linea*/
    left: 0; /*Establece la longitud de la linea de izquierda a derecha*/
    right: 0; /*Establece la longitud de la linea de derecha a izquierda*/
    height: 10px; /* Estable el grosor de la linea*/
    background-color: darkred; /*Colo de la linea*/
    z-index: 1; /*Establece la linea por encima de los objetos*/
    pointer-events: none; /*Para que la linea no intefiera con los botones*/
}`;
        document.head.appendChild(Style);

    }
    else if (botones[6].value == botones[7].value && botones[7].value == botones[8].value && botones[6].value != "") {
        document.getElementById("turno").innerHTML = `Gana ${botones[6].value}`;
        Dall()
        const Style = document.createElement("style")
        Style.textContent = `  tr:nth-child(3)::after{
    content: ""; /*En realidad es un texto al que se le agrega un fondo el vual es la linea*/
    position: absolute; /* Establece lo que se tomara en cuenta para dibujar la linea*/
    top: 50%; /*Estable el punto de particion en el renglon para dibujar la linea*/
    left: 0; /*Establece la longitud de la linea de izquierda a derecha*/
    right: 0; /*Establece la longitud de la linea de derecha a izquierda*/
    height: 10px; /* Estable el grosor de la linea*/
    background-color: darkred; /*Colo de la linea*/
    z-index: 1; /*Establece la linea por encima de los objetos*/
    pointer-events: none; /*Para que la linea no intefiera con los botones*/
}`;
        document.head.appendChild(Style);

    }
    else if (botones[0].value == botones[3].value && botones[3].value == botones[6].value && botones[0].value != "") {
        document.getElementById("turno").innerHTML = `Gana ${botones[0].value}`;
        Dall()
        const Style = document.createElement("style")
        Style.textContent = `td:nth-child(1)::after{
    content: "";
    position: absolute;
    top: -1px;
    bottom: -1px;
    left: 50%;
    width: 10px;
    background-color: crimson;
    z-index: 1;
    pointer-events: none;
}`;
        document.head.appendChild(Style);
    }
    else if (botones[1].value == botones[4].value && botones[4].value == botones[7].value && botones[1].value != "") {
        document.getElementById("turno").innerHTML = `Gana ${botones[1].value}`;
        Dall();
        const Style = document.createElement("style")
        Style.textContent = `td:nth-child(2)::after{
    content: "";
    position: absolute;
    top: -1px;
    bottom: -1px;
    left: 50%;
    width: 10px;
    background-color: crimson;
    z-index: 1;
    pointer-events: none;
}`;
        document.head.appendChild(Style);

    }
    else if (botones[2].value == botones[5].value && botones[5].value == botones[8].value && botones[2].value != "") {
        document.getElementById("turno").innerHTML = `Gana ${botones[2].value}`;
        Dall()
        const Style = document.createElement("style")
        Style.textContent = `td:nth-child(3)::after{
    content: "";
    position: absolute;
    top: -1px;
    bottom: -1px;
    left: 50%;
    width: 10px;
    background-color: crimson;
    z-index: 1;
    pointer-events: none;
}`;
        document.head.appendChild(Style);

    }
    else if (botones[0].value == botones[4].value && botones[4].value == botones[8].value && botones[0].value != "") {
        document.getElementById("turno").innerHTML = `Gana ${botones[0].value}`;
        Dall()
        const Style = document.createElement("style")
        Style.textContent = ` table::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% * 1.414);
    height: calc(100% * 1414);
    border-top: 5px solid crimson;
    transform: rotate(45deg);
    transform-origin: top left;
    z-index: 1;
    pointer-events: none;
}`;
        document.head.appendChild(Style);


    }
    else if (botones[2].value == botones[4].value && botones[4].value == botones[6].value && botones[2].value != "") {
        document.getElementById("turno").innerHTML = `Gana ${botones[2].value}`;
        Dall()
        const Style = document.createElement("style")
        Style.textContent = `table::after {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    width: calc(100% * 1.414);
    height: calc(100% * 1414);
    border-top: 5px solid crimson;
    transform: rotate(-45deg);
    transform-origin: top right;
    z-index: 1;
    pointer-events: none;
}`;
        document.head.appendChild(Style);

    }
    
}
function Dall() {
    var botones = document.querySelectorAll("input[type=button]");
    for (let i = 0; i < botones.length; i++) {
        botones[i].disabled = true;
    }
}
