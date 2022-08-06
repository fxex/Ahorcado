const cuadro = document.getElementById("cuadro");

let crearCuadro = (width, height)=>{
    cuadro.width = width;
    cuadro.height = height;
    let pincel = cuadro.getContext("2d");
    pincel.fillStyle = "#F3F5FC"
    pincel.fillRect(0,0,width,height);
}

crearCuadro(1200,800);
