export default class Area{
    base_superior=''
    base_inferior=''
    altura=''
    base='';
    altura2='';

    constructor(bs,bi,a,b,a2){
        this.base_superior=bs;
        this.base_inferior=bi;
        this.altura=a;
        this.base=b;
        this.altura2=a2;
    }
    calcularAreaTrap (){
        const resultado=(this.base_superior+this.base_inferior/2)*this.altura;
        return resultado;
    }
    calcularBaseTrian (){
        const resultado2=this.base*this.altura2/2;
        return resultado2;
    }
} 