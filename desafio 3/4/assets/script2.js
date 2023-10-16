const div1 = document.querySelector("#div1");
const div2 = document.querySelector("#div2");
const div3 = document.querySelector("#div3");
const div4 = document.querySelector("#div4");

//const cuadrados = document.querySelector(".cuadrado");
//cuadrados.forEach((caja)) => {
  //caja.addEventListener("click", (evento) => { console.log(evento.target) })
//})


  div1.addEventListener("click", cambiarColor);
  div2.addEventListener("click", cambiarColor);
  div3.addEventListener("click", cambiarColor);
  div4.addEventListener("click", cambiarColor);


  function cambiarColor(event) {
    event.target.style.backgroundColor = "black";
  }
  let color_x_tecla="";

  document.addEventListener("keydown", function (event) {
    if (event.key === "a") {
      color_x_tecla="pink";
      console.log(color_x_tecla);
      key.style.backgroundColor = color_x_tecla;

    }
    if (event.key === "s") {
      color_x_tecla="orange";
      console.log(color_x_tecla);
      key.style.backgroundColor = color_x_tecla;

    } 
    if (event.key === "d") {
      color_x_tecla="lightblue";
      console.log(color_x_tecla);
      key.style.backgroundColor = color_x_tecla;
    } 


  });