import Persona from "./personaClass.js";

let nombre = document.querySelector("#nombre");
let edad = document.querySelector("#edad");
let dni = document.querySelector("#dni");
let genero = document.querySelector("#genero");
let peso = document.querySelector("#peso");
let altura = document.querySelector("#altura");
let formGeneraciones = document.querySelector("#formGeneraciones");
let fechaNacimiento = document.querySelector("#fechaNacimiento");
let alerta = document.querySelector("#alerta");
let btnmostrarDatos = document.querySelector("#mostrarDatos");
let btnmostrarGeneracion = document.querySelector("#mostrarGeneracion");

formGeneraciones.addEventListener("submit", generaciones);

function generaciones(e){
    e.preventDefault();
    console.log("desde generaciones");
    if(
        nombre.value.trim().length > 0 &&
        edad.value.trim().length > 0 &&
        dni.value.trim().length > 0 &&
        fechaNacimiento.value.trim().length > 0 
    ){
        //creo el objeto persona
        const personaNueva=new Persona(
            nombre.value,
            edad.value,
            genero.value,
            peso.value,
            altura.value,
            fechaNacimiento.value
        );
        //Resetear el formulario
        resetearDatos();
        //Mostramos opciones para la persona creada
        let datosExtras=document.querySelector("#datosExtras");
        datosExtras.className="container bg-light my-4 raunded-3";
        //Agregar el nombre en la seccion de detalle
        datosExtras.children[0].children[0].innerHTML=`<i class="bi bi-person-check mx-2"></i>Persona: ${personaNueva.mostrarNombre}`;
        //Agregar un manejador de eventos en el botón
        btnmostrarDatos.addEventListener("click", ()=>
        mostrarDatosPersona(personaNueva));
        btnmostrarGeneracion.addEventListener("click", ()=>{
            let panelDatos=document.querySelector("#detalle");
            panelDatos.innerHTML=personaNueva.mostrarGeneracion();
        });
    }else{
        alerta.innerHTML="Debe cargar todos los datos";
    }
}
function resetearDatos(){
    formGeneraciones.reset();
    document.querySelector("#detalle").innerHTML="";
}
function mostrarDatosPersona(persona){
    let panelDatos=document.querySelector("#detalle");
    panelDatos.innerHTML=persona.mostrarDatos();
}