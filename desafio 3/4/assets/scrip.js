
const div1 = document.getElementById("div1");
const div2 = document.getElementById("div2");
const div3 = document.getElementById("div3");
const div4 = document.getElementById("div4");

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
  if (event.key === "q") {
      console.log("he creado el div purple");
      const nuevoDiv = document.createElement("div");
      nuevoDiv.style.width = "200px";
      nuevoDiv.style.height = "200px";
      nuevoDiv.style.backgroundColor = "purple";
      document.body.appendChild(nuevoDiv);
  } 
  if (event.key === "w") {
      console.log("he creado el div gray");
      const nuevoDiv = document.createElement("div");
      nuevoDiv.style.width = "200px";
      nuevoDiv.style.height = "200px";
      nuevoDiv.style.backgroundColor = "gray";
      document.body.appendChild(nuevoDiv);
  } 
  if (event.key === "e") {
      console.log("he creado el div gray");
      const nuevoDiv = document.createElement("div");
      nuevoDiv.style.width = "200px";
      nuevoDiv.style.height = "200px";
      nuevoDiv.style.backgroundColor = "brown";
      document.body.appendChild(nuevoDiv);
  } 


});