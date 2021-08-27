const calcular = () => {
    const area = document.getElementById("inp1").value;

    const resultado = Math.PI * Math.sqrt(area);
    document.getElementById("h_resultado").textContent = 'El resultado es: '+resultado
}
const boton = document.getElementById("btn_calcular");
boton.addEventListener("click",calcular);