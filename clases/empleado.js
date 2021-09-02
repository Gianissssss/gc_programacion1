export default class Empleado {
    nombre = '';
    apellido = '';

    constructor(n,a){
        this.nombre = n;
        this.apellido = a;
    }
    
    mostrarDatosEmpleado (){
        console.log(`
            Mi nombre es: ${this.nombre}
            Mi apellido es: ${this.apellido}
        `);
   }
}