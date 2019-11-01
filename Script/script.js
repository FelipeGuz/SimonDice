
var intento = 0;
var turno = 0;
var color = ["red","blue","green","yellow"];

var patron = [Math.floor((Math.random()*4))];

console.log("Comienzo")

var id = setInterval(()=>{
    console.log("Cambiando a negro")
    document.getElementById("boton"+patron[0]).style.backgroundColor = "black";
}, 5000);
console.log("Retomando")
document.getElementById("boton"+patron[0]).style.backgroundColor = color[patron[0]];

// document.getElementById("boton"+patron[0]).style.backgroundColor = "black";
// setTimeout(()=>{document.getElementById("boton"+patron[0]).style.backgroundColor = color[patron[0]];},200)


function juego(boton){
    if(partida(patron,boton,intento)==true){
        if(intento==turno){
            var n = Math.floor((Math.random()*4));
            patron.push(n);

            console.log(patron)

            for(var i=0; i<patron.length; i++){
                console.log(patron[i])
                var id = setInterval(()=>{
                    console.log("Cambiando a negro")
                    document.getElementById("boton"+patron[i]).style.backgroundColor = "black";
                }, 5000);
                console.log("Retomando")
                document.getElementById("boton"+patron[i]).style.backgroundColor = color[patron[i]];
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


