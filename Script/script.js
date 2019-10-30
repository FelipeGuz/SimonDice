
var patron = [Math.floor((Math.random()*4)+1)];

var temp = document.getElementById("boton"+patron[0]).style.boxShadow;
console.log(temp)
// document.getElementById("boton"+patron[0]).style.boxShadow = "none";
document.getElementById("boton"+patron[0]).style.boxShadow = temp;

var intento = 0;
var turno = 0;

function juego(boton){
    if(partida(patron,boton,intento)==true){
        if(intento==turno){
            var n = Math.floor((Math.random()*4)+1);
            patron.push(n);

            for(var i=0; i<patron.length; i++){
                var temp = document.getElementById("boton"+patron[i]);
                document.getElementById("boton"+patron[i]).style.boxShadow = "none";
                document.getElementById("boton"+patron[i]).style.boxShadow = temp;
            }
            
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

// while(true){
//     var n = prompt();
//     if(partida(patron,n,intento)==true){
//         if(intento==turno){
//             var n = Math.floor((Math.random()*4)+1);
//             patron.push(n);
            
//             console.log("Correcto: "+n)
//             intento = 0;
//             turno++;   
//         }else{
//             console.log("Numero Correcto")
//             intento++;
//         }
//     }else{
//         console.log("Incorrecto");
//         break;
//     }
// }


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

