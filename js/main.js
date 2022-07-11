const form = document.getElementById("contact");

// FUCTION TO VALIDATE THE CONTACT FORM

function formValidation(fEmail, fTextArea) {
  var fExpValidEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

  var isValid = fExpValidEmail.test(fEmail);

  if (isValid == false) {
    document.getElementById("errorEmail").innerHTML =
      "Escriba un email válido...! (ejemplo@dominio.com)";

    document.getElementById("inputEmail").focus();
  }

  if (fTextArea.length == "") {
    document.getElementById("errorTextArea").innerHTML =
      "Escriba un mensaje...!";

    document.getElementById("inputTextArea").focus();
  }

  if (isValid == true && fTextArea != "") {
    document.getElementById("errorEmail").innerHTML = "";
    document.getElementById("errorTextArea").innerHTML = "";
    form.reset();
  }
}
