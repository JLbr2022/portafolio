// FUCTION TO VALIDATE THE CONTACT FORM

function formValidation(fEmail, fTextArea) {
  var fExpValidEmail = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;

  var isValid = fExpValidEmail.test(fEmail);

  if (isValid == true) {
    alert("Valid Email");
    document.getElementById("errorEmail").innerHTML = "";
  } else {
    alert("Invalid Email");
    document.getElementById("errorEmail").innerHTML =
      "Escriba un email válido...! (ejemplo@dominio.com)";
    document.getElementById("inputEmail").focus();
  }

  if (fTextArea.length > 0) {
    alert("Valid TextArea");
    document.getElementById("errorTextArea").innerHTML = "";
  } else {
    alert("Invalid TextArea");
    document.getElementById("errorTextArea").innerHTML =
      "Escriba un mensaje...!";
    document.getElementById("inputTextArea").focus();
  }
}
