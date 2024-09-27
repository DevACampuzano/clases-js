// para obtener los datos de localStorage se usa la funcion getItem
const dataLocalStorage = localStorage.getItem("data") || "[]";

// obtenemos el elemento donde se mostraran los datos
const table = document.querySelector("table");

//convertimos la cadena que tiene un json a un objeto
const data = JSON.parse(dataLocalStorage);

//validamos si se encuentra algun dato en el localStorage
if (data.length > 0) {
  //creamos una variable que contendra el contenido de la tabla
  let tableContent = "<tr><th>Nombre</th><th>Edad</th><th>estado</th></tr>";

  //recorremos los datos
  data.forEach((element) => {
    //agregamos los datos a la tabla
    tableContent += `<tr><td>${element.nombre}</td><td>${element.edad}</td></tr>`;
  });

  //mostramos los datos en la tabla
  table.innerHTML = tableContent;
} else {
  //mostramos los datos en la tabla
  table.innerHTML = "<H1>No hay datos</H1>";
}
