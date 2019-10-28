

var patron = [0];
var intento = 0;
var turno = 0;

while(true){
    var n = prompt();
    if(partida(patron,n,intento)==true){
        if(intento==turno){
            var n = Math.floor((Math.random()*4)+1);
            patron.push(n);
            
            console.log("Correcto: "+n)
            intento = 0;
            turno++;   
        }else{
            console.log("Numero Correcto")
            intento++;
        }
    }else{
        console.log("Incorrecto");
        break;
    }
}


// Confirmar que el boton oprimido es el correcto de la sucesion
function partida(patron,boton,intento){
    console.log("Valor esperado: "+patron[intento]);
    console.log("Boton: "+parseInt(boton))
    if(patron[intento]===parseInt(boton)){
        return true;
    }else{
        return false;
    }
}

