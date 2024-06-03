let elementoJavaScript = document.createElement("li")

elementoJavaScript.innerText = "JavaScript"
elementoJavaScript.id = "ling-js"

let listaLinguagens = document.querySelector(".lista-linguagens")
listaLinguagens.appendChild(elementoJavaScript)

console.log(elementoJavaScript)

const postagemJavaScript = document.createElement("div")



const postagens = document.querySelector(".postagens")

postagens.appendChild(postagemJavaScript)

postagemJavaScript.innerHTML = `
<h2 class="post-titulo">JavaScript</h2>
<p class="post-texto">
JavaScript é uma linguagem de programação.
</p>`