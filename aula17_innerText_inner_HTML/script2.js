// No arquivo script.js capture os quatro elementos criados, e use a propriedade .innerText para adicionar conteúdo textual 
// aos elementos 'h1' e 'a', e a propriedade .innerHTML para adicionar três itens simples na lista não ordenada, e 
// três itens com links para outros sites na lista ordenada.  

let elemento1 = document.querySelector("h1");

console.log(elemento1);
console.log(elemento1.innerText);

let elementoa = document.querySelector("a");

console.log(elementoa);
console.log(elementoa.innerText);

elementoa.innerText = "Aqui vai ser o link para a Proz";

let elementool = document.querySelector("ol");

console.log(elementool);
console.log(elementool.innerHTML);

elementool.innerText = "Aqui seria a lista OL"

let elementoul = document.querySelector("ul");

console.log(elementoul);
console.log(elementoul.innerHTML);


elemento1.innerText = "Titulo Inserido pelo JS no HTML";

elementoa.innerHTML = `
<h2>Lista Criada no JS</h2>
<li>Nova linha Criada pelo JS</li>
<li>Nova linha Criada pelo JS</li>
<li>Nova linha Criada pelo JS</li>`