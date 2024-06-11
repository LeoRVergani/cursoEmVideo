const voltarHome = document.getElementById("goHome");


window.addEventListener("keyup", (event) => {
    if(event.code == "Backspace"){
        voltarHome.click()
    }
})