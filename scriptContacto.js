var btnSendContact = document.getElementById("btnSendContact");
btnSendContact.addEventListener("click", contact);

let textInput = document.getElementById("textInput");
let emailInput = document.getElementById("emailInput");
let phoneInput = document.getElementById("phoneInput");
let captcha = document.getElementById("captcha");
let pais = document.getElementById("paises");
let mensajeInput = document.getElementById("mensajeInput");

let textAlert = document.getElementById("textAlert");
let emailAlert = document.getElementById("emailAlert");
let phoneAlert = document.getElementById("phoneAlert");
let captchaAlert = document.getElementById("captchaAlert");
let messageAlert = document.getElementById("messageAlert");

function contact() {
  let submitAllowed = true;
  textAlert.style.opacity = 0;
  emailAlert.style.opacity = 0;
  phoneAlert.style.opacity = 0;
  captchaAlert.style.opacity = 0;
  messageAlert.style.opacity = 0;

  if (textInput.value == "") {
    textAlert.style.opacity = 100;
    submitAllowed = false;
  }
  if (emailInput.value == "") {
    emailAlert.style.opacity = 100;
    submitAllowed = false;
  }
  if (phoneInput.value == "") {
    phoneAlert.style.opacity = 100;
    submitAllowed = false;
  }
  if (!captcha.checked) {
    captchaAlert.style.opacity = 100;
    submitAllowed = false;
  }
  if (mensajeInput.value == "") {
    messageAlert.style.opacity = 100;
    submitAllowed = false;
  }

  if (submitAllowed) {
    console.log("contact submit");
    window.location.href = "./contacto.html";
  }
}
