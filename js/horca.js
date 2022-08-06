let dibujarManiqui = (cantidad) =>{
    switch (cantidad) {
        case 1:
            dibujarHorca();
            break;
        case 2:
            dibujarCabeza();
            break;
        case 3:
            dibujarTronco();
            break;
        case 4:
            dibujarPiernaIzq();
            break;
        case 5:
            dibujarPiernaDer();
            break;
        case 6:
            dibujarBrazoIzq();
            break;
        case 7: 
            dibujarBrazoDer();
            break;
        default:
            break;
    }
}



let dibujarHorca = ()=>{
    let pincel = cuadro.getContext("2d");
    pincel.fillStyle = "#0A3871";
    pincel.fillRect(450,400,250,5)
    pincel.fillRect(450+(250/4),0,4.5,400)
    pincel.fillRect(450+(250/4),0,177.5,4.5)
    pincel.fillRect(450+(250/4)+177.5,0,4.5,49)
}

let dibujarCabeza = ()=>{
    let pincel = cuadro.getContext("2d");
    pincel.strokeStyle = "#0A3871";
    pincel.beginPath();
    pincel.lineWidth = 4.5;
    pincel.arc(450+(250/4)+177.5,29*2 + 30,40,0, Math.PI *2,true);
    pincel.stroke();
}

let dibujarTronco = ()=>{
    let pincel = cuadro.getContext("2d");
    pincel.fillStyle = "#0A3871";
    pincel.fillRect(450+(250/4)+177.5,(29*2 + 30)+ (29*2 + 30)/2, 4.5, 135)
}

let dibujarPiernaIzq = ()=>{
    let pincel = cuadro.getContext("2d");
    pincel.strokeStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(450+(250/4)+177.5+2,(29*2 + 30)+ (29*2 + 30)/2 + 130)
    pincel.lineTo(450+(250/4)+177.5-50,(29*2 + 30)+ (29*2 + 30)/2 + 130+ 75)
    pincel.stroke();
}

let dibujarPiernaDer = ()=>{
    let pincel = cuadro.getContext("2d");
    pincel.strokeStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(450+(250/4)+177.5+2,(29*2 + 30)+ (29*2 + 30)/2 + 130)
    pincel.lineTo(450+(250/4)+177.5+50,(29*2 + 30)+ (29*2 + 30)/2 + 130+ 75)
    pincel.stroke();
}

let dibujarBrazoIzq = ()=>{
    let pincel = cuadro.getContext("2d");
    pincel.strokeStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(450+(250/4)+177.5+2,(29*2 + 30)+ (29*2 + 30)/2 + 130/4)
    pincel.lineTo(450+(250/4)+177.5-50,(29*2 + 30)+ (29*2 + 30)/2 + 130/4+80)
    pincel.stroke();
}

let dibujarBrazoDer = ()=>{
    let pincel = cuadro.getContext("2d");
    pincel.strokeStyle = "#0A3871";
    pincel.beginPath();
    pincel.moveTo(450+(250/4)+177.5+2,(29*2 + 30)+ (29*2 + 30)/2 + 130/4)
    pincel.lineTo(450+(250/4)+177.5+50,(29*2 + 30)+ (29*2 + 30)/2 + 130/4+80)
    pincel.stroke();
}