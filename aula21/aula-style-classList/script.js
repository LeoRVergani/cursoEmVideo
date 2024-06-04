//console.log("Olá, mundo!")

const h2Element = document.querySelector("h2")

h2Element.style.color = "blue"
h2Element.style.fontSize = "30px"


const buttonElement = document.querySelector("button")

buttonElement.style.backgroundColor = "red"
buttonElement.style.color = "white"
buttonElement.style.borderRadius = "4px"


// PRIMEIRA INTERAÇÃO DO USUÁRIO - CAPTURA O INPUT DE NOME DO USUÁRIO
const userNameInput = document.getElementById("login-usuario")

// ADICIONA A CLASSE "ERROR" AO INPUT DE NOME DO USUÁRIO
userNameInput.classList.remove("error")

// SEGUNDA INTERAÇÃO DO USUÁRIO - CORRIGE O INPUT DE NOME DO USUÁRIO
userNameInput.classList.add("correct")

// E ADICIONA A CLASSE "ERROR"  AO INPUT DE SENHA
const passwordInput = document.getElementById("login-senha")
passwordInput.classList.add("error")

// CAPTURA A PRIMEIRA MENSAGEM DE ERRO
const errorMessage = document.querySelector(".error-text")

// ADICIONA A CLASSE "VISIBLE" À MENSAGEM DE ERRO
errorMessage[0].classList.remove("visible")
// ADICIONA A CLASSE "VISIBLE" À SEGUNDA MENSAGEM DE ERRO
errorMessage[1].classList.add("visible")

