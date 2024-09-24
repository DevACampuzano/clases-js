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

  if (output.pregunta1 == "alto") {
    log.innerHTML = "Pregunta 1 es correcta";
  }
});
