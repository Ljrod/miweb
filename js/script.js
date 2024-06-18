function animacion() {
    let textAnimacion = [
        ["L", "e", "d", "u", "a", "r", "d",],
        ["D", "e", "s", "r", "r", "o", "l", "l", "a", "d", "o", "r",]
    ];

    let letraContador = -1;
    let nivelArray = 0;

    const contenedorAnimacion = document.querySelector(".nombre");

    function pintarTexto() {
        letraContador++;
        contenedorAnimacion.textContent += textAnimacion[nivelArray][letraContador];

        if (letraContador === textAnimacion[nivelArray].length - 1){
            clearInterval(intervalo);

            setTimeout(() => {

                intervalo = setInterval(() => {
                    contenedorAnimacion.textContent = "";
                    letraContador--;
                    textAnimacion[nivelArray].pop();   


                    textAnimacion{nivelArray}.array.forEach(elemento => {
                        contenedorAnimacion.textContent += elemento;
                    });

                    if(letraContador < 0) {
                        clearInterval(intervalo);
                    }

                }, 150);

            } 1000);
        }
    }

    let intervalo = setInterval(pintarTexto, 150)
}

window.addEventListener("load", animacion);