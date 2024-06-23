let keyText = document.querySelector("#key-text");
let codeText = document.querySelector("#code-text");
let quadrado = document.querySelector("#quadrado");
let distanciaDaEsperda = 0

document.addEventListener("keyup", (e) => {
    keyText.innerText = e.key;
    codeText.innerText = e.code;
})

document.addEventListener("keydown", (e) => {
    if(e.code == "ArrowRight"){
        distanciaDaEsperda = distanciaDaEsperda + 10
        console.log(distanciaDaEsperda);

        quadrado.style.left = distanciaDaEsperda + "px"
    }
})