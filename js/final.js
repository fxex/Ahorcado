let finJuego = ()=>{
    let pincel = cuadro.getContext("2d");
    pincel.fillStyle = "#f00f00";
    pincel.font = "48px 'Inter'"
    pincel.fillText("Fin del juego!",450+(250/4)+177.5+50,(29*2 + 30)+ (29*2 + 30)/2 + 130/4)
    pincel.fillText("La palabra era:", 10, 50);
    pincel.fillText(texto.toLowerCase(), 10, 98);
    setTimeout(()=>{
        pincel.fillStyle = "#F3F5FC"
        pincel.fillRect(10, 10, 300, 100)
    },2000)
    iniciar = false;
}

let ganarJuego = ()=>{
    let pincel = cuadro.getContext("2d");
    pincel.fillStyle = "#00f00f";
    pincel.font = "48px 'Inter'"
    pincel.fillText("Felicidades Ganaste",450+(250/4)+177.5+50,(29*2 + 30)+ (29*2 + 30)/2 + 130/4)
    iniciar = false;
}
