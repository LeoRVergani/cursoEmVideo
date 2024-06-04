let elementoJS = document.createElement("main")


elementoJS.innerText = "Testo Inserido por InnerText"
elementoJS.id = "TesteDeID"

let produtoVenda = document.querySelector("main")
produtoVenda.appendChild(elementoJS)

console.log(elementoJS)

const postagemJS = document.createElement("div")

const postagens = document.querySelector("#TesteDeID")

postagens.appendChild(postagemJS)

postagemJS.innerHTML = `
<h1>Inserido pelo InnerHTML</h1>
<p>
    Paragrafo escrito pelo innerHTML
</p>`