
let texto, letra;
let cont = 0;
let espacios = [];
let letrasIncorrectas = [];
let letrasCorrectas = [];
let iniciar = true;
let palabrasSecretas = ["titulo", "manzana", "limonada", "carbon", "hombro", "torreta", "moto", "legado"];;

let borrarPizarra = ()=>{
    let pincel = cuadro.getContext("2d");
    pincel.clearRect(0,0,1200,800)
}


let mostrarGuion = (cantidad)=>{
    let pincel = cuadro.getContext("2d");
    borrarPizarra();
    pincel.fillStyle = "#0A3871";
    if (cantidad < 5) {
        for (let i = 0; i < cantidad*8; i+=8) {
            pincel.fillRect( (((96*12)/2) - ((cantidad)*48)) + (16*i),600,80,4);
            espacios.push({i:(((96*12)/2) - ((cantidad)*48)) + 16*i});
        }
    } else {
        let contador;
        if (cantidad<=6) {
            contador = 20*(cantidad/5 * cantidad/5);
        } else{
            contador = 20*(cantidad/2)
        }
        for (let i = 0; i < cantidad*8; i+=8) {
            pincel.fillRect((((96*12)/2) - contador - ((cantidad)*48) )+ (16*i),600,80,4);
            espacios.push({i:(((96*12)/2) - contador - ((cantidad)*48) )+ (16*i)})
        }
    }
}

let mostrarLetraCorrecta = (letra, index)=>{
    let pincel = cuadro.getContext("2d");
    pincel.fillStyle = "#0A3871";
    pincel.font = "96px 'Inter'"
    pincel.fillText(letra,espacios[index].i,550)
}

let mostrarPalabraCorrecta = ()=>{
    let pincel = cuadro.getContext("2d");
    pincel.fillStyle = "#0A3871";
    pincel.font = "96px 'Inter'"
}

let mostrarLetraIncorrecta = (letra)=>{
    let pincel = cuadro.getContext("2d");
    pincel.fillStyle = "#0A3871";
    pincel.font = "48px 'Inter'"
    pincel.fillText(letra,200 + (cont*48),700)
    cont++;
}

let palabraSecreta = ()=>{
    
    let numeroRandom = Math.floor(Math.random() * (palabrasSecretas.length - 0) + 0);
    let palabra = palabrasSecretas[numeroRandom].toUpperCase();
    return palabra;
}

let restaurarValores = ()=>{
    letrasCorrectas=[];
    letrasIncorrectas=[];
    cont = 0;
    iniciar = true
    espacios = [];
}

