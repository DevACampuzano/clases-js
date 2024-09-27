function validateInput() {
  /* selecionar el elemento con el id email del contenido del archivo html */
  const inputEmail = document.querySelector("#email");
  /* selecionar el elemento con el id password del contenido del archivo html */
  const inputPassword = document.querySelector("#password");

  /* agrega el evento input para validar la estructura del valor que se ingreso*/
  inputEmail.addEventListener("input", () => {
    /* se declara una funcion regular - se recomienda usar inteligencia artificail para generar estas expreciones */
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    /* validamos con la fincion test de la exprecion regular si el valor ingresado es valido */
    if (!emailPattern.test(inputEmail.value)) {
      /* mensaje de validacion */
      inputEmail.setCustomValidity("Correo electronico invalido");
    } else {
      /*en caso que si cumpla la restrinciones*/
      inputEmail.setCustomValidity("");
    }
  });
  /* agrega el evento input para validar la estructura del valor que se ingreso*/
  inputPassword.addEventListener("input", () => {
    /* validamos si la cantidad de caracteres en la contraseña es igual o mayor a 6 */
    if (inputPassword.value.length < 6) {
      /* mensaje de validacion */
      inputPassword.setCustomValidity(
        "La contraseña debe tener al menos 6 caracteres"
      );
    } else {
      /*en caso que si cumpla la restrinciones*/
      inputPassword.setCustomValidity("");
    }
  });
}

/* ejecutamos la funcion apenas cargue la pagina */
validateInput();

function showData(event) {
  /* previene el evento de recargar la pagina */
  event.preventDefault();

  /* selecionar el elemento con el id email del contenido del archivo html */
  const inputEmail = document.querySelector("#email");
  /* selecionar el elemento con el id password del contenido del archivo html */
  const inputPassword = document.querySelector("#password");
  /* llamamos la funcion aler para mostrar los valores ingresados */
  alert("email: " + inputEmail.value);
  alert("password: " + inputPassword.value);

  /* vaciamos los valores ingresado por el usuario */
  inputEmail.value = "";
  inputPassword.value = "";
}
/* buscamo el elemento dorm */
let formElement = document.querySelector("form");
/* agregamos el evento de submit y le pasamos la funcion que se ejecutara */
formElement.addEventListener("submit", showData);
