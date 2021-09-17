//nos conectamos con la base de datos llamada firestore
const db = firebase.firestore()

const guardarCliente = async () =>{
    const nombre = document.getElementById("inp_nom").value;
    const apellido = document.getElementById("inp_ape").value;
    const dni = document.getElementById("inp_dni").value;

    const unCliente = {
        nombre,
        apellido,
        dni
    }
    //se insertan los datos
    await db.collection("clientes").doc().set(unCliente)

    document.getElementById("inp_nom").value ='';
    document.getElementById("inp_ape").value ='';
    document.getElementById("inp_dni").value ='';
}
const boton =document.getElementById("btn_obtener")
boton.addEventListener("click",guardarCliente)