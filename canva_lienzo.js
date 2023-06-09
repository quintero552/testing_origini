var kmpo = document.getElementById("campito");
var lienzo = kmpo.getContext("2d");
var color = "red";
var x = 150;
var y = 150;


// creamos la funcion del canvas
function dibujandoCanvas(color, xi, yi, xf, yf, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 3;
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
    var movimiento = 10; // variable que dara un movimieno cada 10px
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



