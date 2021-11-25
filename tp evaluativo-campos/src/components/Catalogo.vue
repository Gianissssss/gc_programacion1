<template>
    <div class="row">
        <div v-for="producto of listar_productos" v-bind:key="producto.id" class="col-3 me-1">
            <div class="card" >
             <img :src="producto.url" class="card-img-top" alt="...">
             <div class="card-body">
                 <h5 class="card-title">{{producto.descripcion}}</h5>
                 <h5 class="card-text">{{producto.precio}}</h5>
                 <p class="card-text">{{producto.estado_producto}}</p>
                 <button  class="btn btn-outline-primary">Comprar</button>
            </div>
            </div>
        </div>
    </div>
</template>
<script>
import {collection,onSnapshot}from '@firebase/firestore'
import {db} from '../utils/firebase.js'
export default {
    name:'CatalogoPublic',
    data(){
        return{
         listar_productos:[],
         
        }
    },
    methods:{
        obtener_productos(){
            onSnapshot( collection(db,'productos'),(snapshot)=>{
                this.listar_productos=[]
                snapshot.docs.map((doc)=>{
                this.listar_productos.push({...doc.data(),id:doc.id})
                })
            })
        },
        
    },
    
     mounted(){//apenas carge la pagina quiero que se inicie la funcion
        this.obtener_productos()
    }
}
</script>