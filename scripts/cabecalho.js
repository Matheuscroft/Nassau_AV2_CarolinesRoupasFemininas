var menu = document.querySelector(".cabecalho-menu");
var loginFlutuante = document.querySelector(".cabecalho-login-flutuante");
var menuLogin = document.querySelector(".cabecalho-login");
var botaoEntrarToggle = document.querySelector("#botao-fazer-login-toggle");




function exibirLoginFlutuante() {
  if (window.innerWidth < 600) {
    menu.style.display = "none";
  }

  loginFlutuante.style.display =
    loginFlutuante.style.display === "none" ||
    loginFlutuante.style.display === ""
      ? "flex"
      : "none";
}

function toggleMenu() {
  menu.style.display =
    menu.style.display === "none" || menu.style.display === ""
      ? "flex"
      : "none";
}

window.addEventListener("resize", function () {
  if (window.innerWidth > 600) {
    menu.style.display = "flex";
  } else {
    menu.style.display = "none";
  }
});
