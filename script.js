var btnLogin = document.getElementById("btnIngresar");
let inputUser = document.getElementById("loginUsername");
let inputPass = document.getElementById("loginPass");

btnLogin.addEventListener("click", login);

let USERNAME = "admin";
let PASSWORD = "123";

function login() {
  console.log("holaaa");

  if (inputUser.value == USERNAME && inputPass.value == PASSWORD) {
    console.log("iniciado");
    window.location.href = "./index.html";
  }
}

var animeBox = document.getElementsByClassName("anime");

function animeHover() {}
