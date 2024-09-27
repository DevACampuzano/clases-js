// para obtener los datos de localStorage se usa la funcion getItem
const data = localStorage.getItem("data") || "[]";
// obtenemos el elemento donde se mostraran los datos
const dataLog = document.querySelector("#data");

//mostramos los datos en el log
dataLog.innerHTML = JSON.parse(data).length ? data : "No hay datos";

//funcion para guardar los datos
const guardar = () => {
  // para obtener los datos de localStorage se usa la funcion getItem
  const data = localStorage.getItem("data") || "[]";

  //convertirmos la cadena que tiene un json a un objeto
  const listData = JSON.parse(data);

  //obtenemos el input
  const nombre = document.querySelector("#nombre");
  const edad = document.querySelector("#edad");

  //creamos un objeto con los datos del input
  const newData = {
    nombre: nombre.value,
    edad: edad.value,
  };

  //agregamos el nuevo dato al arreglo
  listData.push(newData);

  //convertimos el objeto a una cadena
  const stringData = JSON.stringify(listData);

  //guardamos la cadena en localStorage
  localStorage.setItem("data", stringData);

  //actualizamos el log
  dataLog.innerHTML = stringData;

  //limpiamos el input
  nombre.value = "";
  edad.value = "";

  // para verificar en el navegador de manera visual que fue guardado el dato vamos a click derecho, inspeccionar, application, local storage
};

// funcion para borrar los datos
const borrar = () => {
  //borramos los datos de localStorage
  localStorage.removeItem("data");

  //actualizamos el log
  dataLog.innerHTML = "No hay datos";
};
