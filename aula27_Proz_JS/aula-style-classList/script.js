let titulo = document.querySelector("h2");

titulo.style.color = "blue";
titulo.style.fontSize = "2.3rem";

let buttom = document.querySelector("button");

buttom.style.border = "green solid 3px";
buttom.style.borderRadius = "8px";
buttom.style.color = "green";
buttom.style.backgroundColor = "yellow";

// Primeira interação do usuário
// Usuário digitou um nome de usuário não valido
let loginUsuario = document.getElementById("login-usuario");


loginUsuario.classList.add("correct")

let password = document.getElementById("login-senha");
let errorPassword = document.querySelector("#password");

password.classList.add("error");
errorPassword.classList.add("visible");

// mudei algumas coisas

