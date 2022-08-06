const inicio = document.getElementById("inicio");
const nuevoJuego = document.getElementById("nuevoJuego");
const desistir = document.getElementById("desistir")

inicio.addEventListener("click",()=>{
    texto = palabraSecreta();
    inicio.parentElement.classList.add("invisible")
    inicio.parentElement.nextElementSibling.classList.remove("invisible")
    mostrarGuion(texto.length)
})

nuevoJuego.addEventListener("click", ()=>{
    letrasCorrectas=[];
    letrasIncorrectas=[];
    cont = 0;
    iniciar = true
    espacios = [];

    texto = palabraSecreta()
    mostrarGuion(texto.length);
})

desistir.addEventListener("click", ()=>{
    inicio.parentElement.classList.remove("invisible")
    inicio.parentElement.nextElementSibling.classList.add("invisible")
    letrasCorrectas=[];
    letrasIncorrectas=[];
    cont = 0;
    iniciar = true
    espacios = [];

})