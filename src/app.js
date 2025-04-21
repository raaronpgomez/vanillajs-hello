import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  const sujetos = ["Mi perro", "Mi abuela", "Un alien", "El vecino", "Un gato ninja"];
  const verbos = ["se comió", "rompió", "escondió", "quemó", "perdió"];
  const objetos = ["mi tarea", "el informe", "mi computadora", "el proyecto", "el control remoto"];
  const tiempos = ["esta mañana", "ayer por la noche", "justo ahora", "mientras dormía", "en clase"];

  function generarExcusa() {
    const sujeto = sujetos[Math.floor(Math.random() * sujetos.length)];
    const verbo = verbos[Math.floor(Math.random() * verbos.length)];
    const objeto = objetos[Math.floor(Math.random() * objetos.length)];
    const tiempo = tiempos[Math.floor(Math.random() * tiempos.length)];
    
    return `${sujeto} ${verbo} ${objeto} ${tiempo}`;
  }
  function mostrarExcusa() {
    const excusaGenerada = generarExcusa();
    document.getElementById("excusa").innerHTML = excusaGenerada;
    console.log(excusaGenerada);
  }
  
document.getElementById("boton").addEventListener("click", mostrarExcusa);
mostrarExcusa();
};