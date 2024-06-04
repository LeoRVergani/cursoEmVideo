const buttonElement = document.querySelector("button")

buttonElement.style.backgroundColor = "red"
buttonElement.style.color = "white"
buttonElement.style.borderRadius = "4px"


// PRIMEIRA INTERAÇÃO DO USUÁRIO - CAPTURA O INPUT DE NOME DO USUÁRIO
const userNameInput = document.getElementById("login-usuario")
// ADICIONA A CLASSE "ERROR" AO INPUT DE NOME DO USUÁRIO
userNameInput.classList.add("error")

// CAPTURA A PRIMEIRA MENSAGEM DE ERRO
const errorMessage = document.querySelector(".error-text")
// ADICIONA A CLASSE "VISIBLE" À MENSAGEM DE ERRO
errorMessage.classList.add("visible")

