<template>
     <div class="row justify-content-md-center">
        <div class="col-md-auto">
            <div class="form-floating mb-3">
                <input v-model="correo" type="email" class="form-control" id="floatingInput" placeholder="name@example.com">
                <label for="floatingInput">Correo</label>
            </div>
            <div class="form-floating mb-3">
                <input v-model="password" type="password" class="form-control" id="floatingPassword" placeholder="Contraseña">
                <label for="floatingPassword">Contraseña</label>
            </div>
            <div class="text-center">
                <button @click="registrar_usuario()" class="btn btn-outline-success">Registrar</button>
                <button @click="iniciar_sesion()" class="btn btn-outline-warning">Iniciar sesion</button>
            </div>
        </div>
    </div>

</template>
<script>
import {auth} from '../utils/firebase.js'
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
export default {
    name:'AutenticacionForm',
    data(){
        return{
            correo:'',
            password:''
        }
    },
    methods:{
        vaciar(){
            this.correo=''
            this.password=''
        },
        async registrar_usuario(){
            try {
                await createUserWithEmailAndPassword(auth, this.correo,this.password)
                this.vaciar()
                alert('El usuario se creo exitosamente')
            } catch (error) {
                alert("Algo sucedio")
            }
            
        },
        iniciar_sesion(){
            try {
                signInWithEmailAndPassword(auth,this.correo,this.password)
                alert("sesion iniciada con exito")
            } catch (error) {
                alert("Algo sucedio")
            }
            
        }
    }

}
</script>