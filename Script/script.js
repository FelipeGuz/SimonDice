
var patron = [0];
var intento = 0;

while(true){
    var n = prompt();
    if(partida(patron,n,intento)==true){
        console.log("Correcto: "+patron)
    }else{
        console.log("Incorrecto");
        break;
    }
}


// Confirmar que el boton oprimido es el correcto de la sucesion
function partida(patron,boton,intento){
    if(patron[intento]===boton){
        var n = Math.floor((Math.random()*4)+1);
        patron.push(n);
        return true;
    }else{
        return false;
    }
}

