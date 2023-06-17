var kmpo = document.getElementById("campito");
var lienzo = kmpo.getContext("2d");
var color = "black";
var x = 150;
var y = 150;


// creamos la funcion del canvas
function dibujandoCanvas(color, xi, yi, xf, yf, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 1;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}


// crear funcion para las flechas, el cual se manejara por flechas

document.addEventListener("keyup" , manejaFlecha); // creamos un documento donde el Keydow y keyup y una funcion

// declaramos unas varibale que reemplazaran las flechas
var teclas = {
    UP: 38,
    RIGHT: 39,
    DOWN: 40,
    LEFT: 37
};


/// Creamos una funcion.

function manejaFlecha(evento){
    var movimiento = 1; // variable que dara un movimieno cada 10px
    if (evento.keyCode == teclas.UP) {
        dibujandoCanvas(color, x, y, x, y - 10, lienzo);
        y = y - 10;
        console.log("Esta es evento");
    }

    if (evento.keyCode == teclas.RIGHT) {
        dibujandoCanvas(color, x, y, x + 10, y, lienzo);
        x = x + 10;
        console.log("Esta es evento");
    }

    if (evento.keyCode == teclas.DOWN) {
        dibujandoCanvas(color, x, y, x, y + 10, lienzo);
        y = y + 10;
        console.log("Esta es evento");
    }

    if (evento.keyCode == teclas.LEFT) {
        dibujandoCanvas(color, x, y, x - 10, y, lienzo);
        x = x -10;
        console.log("Esta es evento");
    }
    
    
}


// Codigo del Evento dibujar con mouseup y mousedown

kmpo.addEventListener("mousedown", lineaInicial ); //Cuadro escucha el evento del clic abajo del mouse y ejecuta la función lineaInicial
kmpo.addEventListener("mouseup", finLinea); //Cuadro escucha el evento clic arriba -soltar- y ejecuta finLinea
kmpo.addEventListener("mousemove", lineaMovimiento ); //cuadro escucha el mov del mouse y ejecutas lineaMovimiento.
var mouse = false;
var x = 0;
var y = 0;



// creamos la funcion del canvas
function dibujandoCanvas(color, xi, yi, xf, yf, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 1;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}



function lineaInicial(e){
    mouse = true;
    dibujandoCanvas("blue", x, y, x, y, lienzo);
    x = e.offsetX;
    y = e.offsetY;
    console.log("Linea Inicial", e);
}


function finLinea(e) {
    mouse = false;
    console.log("Fin de la linea", e);
}

function lineaMovimiento(e) {
    if (mouse == true){
        dibujandoCanvas("blue", x, y, e.offsetX, e.offsetY, lienzo);
        x = e.offsetX;
        y = e.offsetY;
        console.log("Este es la Linea en movimiento",e);
    }
}
 

