const inicio = document.getElementById("inicio");
const agregar = document.getElementById("agregar");
const nuevoJuego = document.getElementById("nuevoJuego");
const desistir = document.getElementById("desistir")
const guardar = document.getElementById("guardar");
const cancelar = document.getElementById("cancelar")

const inputAgregar = document.getElementById("inputAgregar");

const seccionPrincipal = inicio.parentElement;
const seccionAgregar = cancelar.parentElement.parentElement;
const seccionCanvas = desistir.parentElement.parentElement;



inicio.addEventListener("click",()=>{
    texto = palabraSecreta();
    seccionPrincipal.classList.add("invisible")
    seccionCanvas.classList.remove("invisible")
    mostrarGuion(texto.length)
})

agregar.addEventListener("click",()=>{
    seccionPrincipal.classList.add("invisible")
    seccionAgregar.classList.remove("invisible")
})

nuevoJuego.addEventListener("click", ()=>{
    restaurarValores()

    texto = palabraSecreta()
    mostrarGuion(texto.length);
})

desistir.addEventListener("click", ()=>{
    seccionPrincipal.classList.remove("invisible")
    seccionCanvas.classList.add("invisible")
    restaurarValores()

})

guardar.addEventListener("click",()=>{
    let regex = new RegExp(/[á-ú]|[/,;:'"<>.*+\-?^${}()|[\]\\]|[0-9]/);
    let valor = inputAgregar.value;
    console.log(regex.test(valor));
    if (valor.length !==0 && !regex.test(valor)) {
        restaurarValores()
        texto = inputAgregar.value.toUpperCase();
        palabrasSecretas.push(inputAgregar.value)
        seccionAgregar.classList.add("invisible")
        seccionCanvas.classList.remove("invisible")
        mostrarGuion(texto.length)
    }

})

cancelar.addEventListener("click",()=>{
    seccionPrincipal.classList.remove("invisible")
    seccionAgregar.classList.add("invisible")
    restaurarValores()
})

inputAgregar.addEventListener("input",(e)=>{
    let value = e.target.value;
    let p = inputAgregar.nextElementSibling.lastElementChild;
    p.textContent = `Caracteres permitidos: ${Math.abs(value.length-8)}`
})


document.body.addEventListener("keydown", (e)=>{
    if (seccionPrincipal.classList.contains("invisible") && seccionAgregar.classList.contains("invisible") &&iniciar) {
        if (e.key.charCodeAt() > 96 && e.key.charCodeAt() < 123) {
            if (texto.includes(e.key.toUpperCase()) && !letrasCorrectas.includes(e.key.toUpperCase()) ) {
                letra = e.key.toUpperCase();
                let cuenta = 0 
                if (letrasCorrectas.length !== texto.length) {
                    let posicion = texto.indexOf(letra);
                    while(posicion != -1){
                        letrasCorrectas.push(letra);
                        mostrarLetraCorrecta(letra, posicion)
                        cuenta++;
                        posicion = texto.indexOf(letra, posicion+1)
                    }
                    if (letrasCorrectas.length === texto.length) {
                        ganarJuego()
                    }
                } 


            } else if(!texto.includes(e.key.toUpperCase())){
                
                let letra = e.key.toUpperCase();
                if (!letrasIncorrectas.includes(letra)) {
                    letrasIncorrectas.push(letra)
                    if (letrasIncorrectas.length<7) {
                        mostrarLetraIncorrecta(letra)
                        dibujarManiqui(letrasIncorrectas.length)
                    } else if(letrasIncorrectas.length == 7){
                        mostrarLetraIncorrecta(letra)
                        dibujarManiqui(letrasIncorrectas.length)
                        finJuego();
                    }
                }
                
            }
        }
    }
})
