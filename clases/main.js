import Empleado from './empleado.js'
const mostrar_datos = () => {

    const nom = document.getElementById("inp_nombre").value;
    const ape = document.getElementById("inp_apellido").value;

    const instancia = new Empleado(nom,ape)
    instancia.mostrarDatosEmpleado()
   
}
const boton = document.getElementById("btn_guardar");
boton.addEventListener("click",mostrar_datos);