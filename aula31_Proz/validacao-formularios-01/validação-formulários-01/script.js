// ---------- VALIDAÇÃO USERNAME ---------- //
let usernameInput = document.getElementById("username");
let usernameLabel = document.querySelector('label[for="username"]');
let usernameHelper = document.getElementById("username-helper");

// ---------- VALIDAÇÃO EMAIL ---------- //
let emailInput = document.getElementById("email");
let emailLabel = document.querySelector('label[for="email"]');
let emailHelper = document.getElementById("email-helper");

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