var tarjetas = [ 
    "1.jpg","1.jpg","2.jpg","2.jpg",
    "3.jpg","3.jpg","4.jpg","4.jpg",
    "5.jpg","5.jpg","6.jpg","6.jpg",
    "7.jpg","7.jpg","8.jpg","8.jpg"
];

var imagen_temporal,esperando =false;
var contador = 0;

function Cambiarimagen(imagen,indice){
    imagen.src = `./img/${tarjetas[indice]}`;
    imagen.removeAttribute("onclick");
    if (!esperando) imagen_temporal = imagen;
        else{
            if(imagen_temporal.src == imagen.src){
                setTimeout(function(){EliminarPar(imagen_temporal,imagen)},500);
            }else{
                setTimeout(function(){Regresar(imagen_temporal,imagen)},500);
            }
        }
    esperando = !esperando;
}
function Regresar(imagen1,imagen2){
        imagen1.src = "./img/fondo.jpg";
        imagen2.src = "./img/fondo.jpg";
        imagen1.setAttribute("onclick",`Cambiarimagen(this,${imagen1.id})`);
        imagen2.setAttribute("onclick",`Cambiarimagen(this,${imagen2.id})`);
}
function EliminarPar(imagen1,imagen2){
        //desaparece imagen y ajusta tabla
        /*imagen1.src="";
        imagen1.style.display ="none";
        imagen2.src="";
        imagen2.style.display ="none";*/
        
        //se oculta la imagen
        imagen1.style.visibility = "hidden";
        imagen2.style.visibility = "hidden";
        imagen1.removeAttribute("onclick");
        imagen2.removeAttribute("onclick");
        contador++;
        if(contador!=8){
            document.getElementById("contador").innerHTML = `Pares encontrados: ${contador}`;
            document.getElementById("contador").style = "color: blue;";
        } else {
            document.getElementById("contador").innerHTML = `Pares encontrados: ${contador} ¡Ganaste!`;
            document.getElementById("contador").style = "color: pink;";

        }
}


function Revolver(){
        var j=0;
        for (let i = 15; i > 0; i--) {
            j = Math.floor(Math.random() * (i+1));
            [tarjetas[i],tarjetas[j]] = [tarjetas[j],tarjetas[i]];
        }
        //document.getElementById("salida").innerHTML = tarjetas.join(" - ");
}

function Fondo(){
    var fondo = Math.floor(Math.random()*3)+1;
    document.getElementById("tabla").style = `background-image: url("./img/fondo${fondo1}.jpg")`;
}
function Reiniciar(){
    location.reload();
}