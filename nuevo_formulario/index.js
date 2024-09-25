const form = document.querySelector("form");
const log = document.querySelector("#log");

form.addEventListener("submit", function (event) {
  event.preventDefault();
  const data = new FormData(form);

  let output = {};

  for (const entry of data) {
    const key = entry[0];
    const value = entry[1];
    output[key] = value;
  }

  // y en javascript es &&
  // o en javascript es ||

  if (output.name.trim() === "") {
    Swal.fire({
      title: "Complete el formulario",
      text: "Debe ingresar su nombre en el formulario",
      icon: "error",
      showConfirmButton: false,
      timer: 3000,
    });
    return;
  }

  if (output.mail.trim() === "") {
    Swal.fire({
      title: "Complete el formulario",
      text: "Debe ingresar su correo electronico en el formulario",
      icon: "error",
      showConfirmButton: false,
      timer: 3000,
    });
    return;
  }
  // pregunta 1 - alto
  // pregunta 2 - flexible

  // si y sino
  if (output.pregunta1 !== "alto" || output.pregunta2 !== "flexible") {
    Swal.fire({
      title: "No pasaste el examen",
      icon: "error",
    });
  } else {
    Swal.fire({
      title: "Pasaste el examen",
      icon: "success",
    });
    const nombre = document.querySelector("#name");
    const mail = document.querySelector("#mail");
    const listRest1 = document.querySelectorAll("#res1");
    const listRest2 = document.querySelectorAll("#res2");
    const rest3 = document.querySelector("#res3");
    nombre.value = "";
    mail.value = "";
    rest3.checked = false;

    listRest1.forEach((element) => {
      element.checked = false;
    });

    listRest2.forEach((element) => {
      element.checked = false;
    });
  }
});
