import Area from './area.js'
const mostrar = () => {

    const bases = document.getElementById("inp_bs").value;
    const basei = document.getElementById("inp_bi").value;
    const altura = document.getElementById("inp_a").value;
    const instancia = new Area(bases,basei,altura)
    const respuesta =instancia.calcularAreaTrap()
    document.getElementById("h_resultado1").textContent = 'La area del trapecio es: '+respuesta;

    
   
}
const boton = document.getElementById("btn_calcular");
boton.addEventListener("click",mostrar);

const mostrar1 = () => {
    const base = document.getElementById("inp_b").value;
    const altura2 = document.getElementById("inp_alt").value;

    const instancia2 = new Area('','','',base,altura2)
    const respuesta2=instancia2.calcularBaseTrian()
    document.getElementById("h_resultado2").textContent ='La area del triangulo es: '+respuesta2;
}
const boton1 = document.getElementById("btn_calcular2");
boton1.addEventListener("click",mostrar1);