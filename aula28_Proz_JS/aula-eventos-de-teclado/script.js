const linkPerfil = document.getElementById("link-perfil");
const navPerfil = document.getElementById("nav-perfil");
const linkPerfilDados = document.getElementById("link-perfil-dados");

//linkPerfil.addEventListener("mouseover", ()=> {
//  navPerfil.style.display = "block"
//})

window.addEventListener("keyup", (event) => {
  console.log(event.key);
  console.log(event.code);

// Caso o submenu esteja aberto...
  if (navPerfil.style.display == "block"){
    // Navegar para a respectiva página
    if (event.code == "Digit1"){
      linkPerfilDados.click();
    }
  }

  if (event.code == "Digit1"){
    // abre o submenu no perfil
    navPerfil.style.display = "block";
  }

  if (event.code == 'Escape'){
    // Fecha o submenu de perfil
    navPerfil.style.display = 'none';
  }
})