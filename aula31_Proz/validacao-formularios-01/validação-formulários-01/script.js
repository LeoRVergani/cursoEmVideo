// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

// ---------- VALIDAÇÃO IDADE ---------- //
let idadeInput = document.getElementById("idade");
let idadeLabel = document.querySelector('label[for="idade"]');
let idadeHelper = document.getElementById("idade-helper");

// ---------- VALIDAÇÃO DA SENHA ---------- //
let senhaInput = document.getElementById("senha");
let senhaLabel = document.querySelector('label[for="senha"]');
let senhaHelper = document.getElementById("senha-helper");

function mostrarPopup(input, label){
    // Mostrar popup de campo obrigatório
    input.addEventListener("focus", function(){
        label.classList.add("required-popup");
    })

    // Ocultar popup de campo obrigatório
    input.addEventListener("blur", function(){
        label.classList.remove("required-popup");
    })
}

mostrarPopup(usernameInput, usernameLabel);
mostrarPopup(emailInput, emailLabel);
mostrarPopup(idadeInput, idadeHelper);
mostrarPopup(senhaInput, senhaLabel);



// Validar valor do input
usernameInput.addEventListener("change", function(event){
    let valor = event.target.value;

    if(valor.length < 3){
        // Estilos dinâmicos caso o valor não seja válido.
        usernameInput.classList.remove("correct")
        usernameInput.classList.add("error")
        usernameHelper.classList.add("visible")
        usernameHelper.innerText = "Seu username deve ter 3 ou mais caracteres."
    } else {
        // Estilos dinâmicos caso o valor seja válido.
        usernameInput.classList.remove("error")
        usernameInput.classList.add("correct")
        usernameHelper.classList.remove("visible")
    }
})

emailInput.addEventListener("change", function(event){
    let valor = event.target.value;

    if(valor.includes("@")&& valor.includes(".com")){
        emailInput.classList.remove("error")
        emailInput.classList.add("correct")
        emailHelper.classList.remove("visible")
    } else {
        emailInput.classList.remove("correct")
        emailInput.classList.add("error")
        emailHelper.classList.add("visible")
        emailHelper.innerText = "Email inválido."
    }
})

idadeInput.addEventListener("change", function(event){
    let valor = event.target.value;

    if(valor >= 18){
        idadeInput.classList.remove("error")
        idadeInput.classList.add("correct")
        idadeHelper.classList.remove("visible")
    } else {
        idadeInput.classList.remove("correct")
        idadeInput.classList.add("error")
        idadeHelper.classList.add("visible")
        idadeHelper.innerText = "Você tem que ser de maior para o cadastro."
    }
})

senhaInput.addEventListener("change", function(event){
    let valor = event.target.value;

    if(valor.includes("@") || valor.includes(".com")){
        senhaInput.classList.remove("error")
        senhaInput.classList.add("correct")
        senhaHelper.classList.remove("visible")
    } else {
        senhaInput.classList.remove("correct")
        senhaInput.classList.add("error")
        senhaHelper.classList.add("visible")
        senhaHelper.innerText = "A senha deve conter caracteres especiais"
    }
})