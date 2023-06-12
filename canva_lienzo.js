var kmpo = document.getElementById("campito");
var lienzo = kmpo.getContext("2d");
//var color = "red";
/*var x = 150;
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
        dibujandoCanvas(color, xi-1, yi-1, xf+1, yf+1, lienzo);
        x = x -10;
        console.log("Esta es evento");
    }
    
    
}*/


// Codigo del Evento dibujar con mouseup y mousedown

kmpo.addEventListener("mousedown", lineaInicial); //Cuadro escucha el evento del clic abajo del mouse y ejecuta la función lineaInicial
kmpo.addEventListener("mouseup", finLinea); //Cuadro escucha el evento clic arriba -soltar- y ejecuta finLinea
kmpo.addEventListener("mousemove", lineaMovimiento); //cuadro escucha el mov del mouse y ejecutas lineaMovimiento.
var mouse = false;
var xm = e.offsetX;
var ym = e.offsetY;
var strokeStyle = "red"
kmpo.lineJoin = "round";
kmpo.lineCap = "round";
//lastX = kmpo.offsetX;
//lastY = kmpo.offsetY;

function dibujandoMose(color, lastX, lastY, offsetX, offsetY, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 1;
    lienzo.moveTo(lastX, lastY);
    lienzo.lineTo(offsetX, offsetY);
    lienzo.stroke();
    //[lastX, lastY] = [e.offsetX, e.offsetY];
    lienzo.closePath();
}

function lineaInicial(e) {
    mouse = true; 
    //dibujandoCanvas("black", x, y, x, y, lienzo);
    console.log("Esta en movimiento lneaIniciale",e );
}

function finLinea(e) {
    mouse = false;
    console.log("Esta en movimiento FIN D ELA LIENA",e );
}

function lineaMovimiento(e) {
    
    if (mouse == true) {
        dibujandoMose("blue", xm, ym, e.offsetX, e.offsetY, lienzo);
        console.log("Esta en movimiento DIBUJA LA LINEA",mouse );
    }
}

