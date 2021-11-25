<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Tienda</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav">
        <router-link class="nav-link" to="/">Home</router-link> 
        <router-link class="nav-link" to="/catalogoAdmin">Catalogo</router-link> 
        <router-link class="nav-link" to="/catalogoPublic">Carga de productos</router-link>
      </div>
      <div class="navbar-nav ms-auto">
        <h6 class="nav-link">{{this.usuario?.email}}</h6>
        <router-link v-if="usuario?.email ==null" class="nav-link" to="/autenticacion">Ingresar</router-link>
        <button v-if="usuario?.email !=null" @click="cerrar_sesion()" class="btn btn-primary">Salir</button>
      </div>
    </div>
  </div>
</nav>
<div class="container mt-3" >
<router-view/>
</div>
  
</template>
<script>
import{onAuthStateChanged, signOut}from 'firebase/auth'
import{auth} from '@/utils/firebase.js'
export default {
  data(){
    return{
      usuario:null
    }
  },
  methods:{
    obtener_usuario_logueado(){
      onAuthStateChanged(auth, (user)=>{
        this.usuario=user;
      })
    },
    async cerrar_sesion(){
      try {
        await signOut(auth)
      } catch (error) {
        alert("Algo sucedio")
      }
    },
  },
  mounted(){
    this.obtener_usuario_logueado()
  }
}

</script>