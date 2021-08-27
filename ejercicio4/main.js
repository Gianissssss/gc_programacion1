const calcular = () => {
    const vi = document.getElementById("inp_vi").value;
    const vf = document.getElementById("inp_vf").value;

    const t = (vf-vi) / 9.81;
    return t;

}
const mostrar = () => {
    const respuesta = calcular();
    document.getElementById("h_resultado").textContent = 'El tiempo es: '+respuesta
}

const boton = document.getElementById("btn_calcular");
boton.addEventListener("click",mostrar);