<template>
    <h3>Carga de productos</h3>
     <div class="row">
    <div class="col-4">
        <div class="form-floating mb-3">
            <input v-model="descripcion" class="form-control" placeholder="Ingrese name" type="text" id="floatingInput">
            <label for="floatingInput"><em>Ingrese descripcion</em></label> 
        </div>
        <div class="form-floating mb-3">
            <input v-model="precio" class="form-control" placeholder="Ingrese name" type="number" id="floatingInput">
            <label for="floatingInput"><em>Ingrese precio</em></label>   
        </div>
        <div class="form-floating mb-3">
            <input v-model="porcentaje_descuento" class="form-control" placeholder="name" type="number" id="floatingInput">
            <label for="floatingInput"><em>Ingrese porcentaje de descuento</em></label>   
        </div>
        <div class="form-floating mb-3">
            <input v-model="categoria" class="form-control" placeholder="name" type="text" id="floatingInput">
            <label for="floatingInput"><em>Ingrese categoria</em></label> 
        </div>
        <div class="form-floating mb-3">
            <input v-model="stock" class="form-control" placeholder="name" type="number" id="floatingInput">
            <label for="floatingInput"><em>Ingrese stock</em></label> 
        </div>
        <div class="form-floating mb-3">
            <select v-model="estado_producto" class="form-select" aria-label="Default select example">
                <option value="Activo">Activo</option>
                <option value="Inactivo">Inactivo</option>
            </select>
            <label for="floatingInput"><em>Ingrese estado</em></label> 
        </div>
        <div class="mb-3">
            <label><em>Adjuntar imagen</em></label>
            <input id="inp_file" type="file">
        </div>
        <button v-if="estado==0" @click="guardar_producto()" class="btn btn-outline-warning">Guardar</button>
        <button v-if="estado==1" @click="actualizar_producto()" class="btn btn-outline-info">Actualizar</button>
    </div>
    <div class="col-8">
        <table class="table table-hover">
            <thead>
                <tr class="table-primary">
                    <th scope="col">Img</th>
                    <th scope="col">Descripcion</th>
                    <th scope="col">Precio</th>
                    <th scope="col">Descuento</th>
                    <th scope="col">Categoria</th>
                    <th scope="col">Stock</th>
                    <th scope="col">Estado</th>
                    <th scope="col">Acciones</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="producto of listar_productos" v-bind:key="producto.id">
                    <td><img style="width:4rem" :src="producto.url" alt=""></td>
                    <td>{{producto.descripcion}}</td>
                    <td>{{producto.precio}}</td>
                    <td>{{producto.porcentaje_descuento}}</td>
                    <td>{{producto.categoria}}</td>
                    <td>{{producto.stock}}</td>
                    <td>{{producto.estado_producto}}</td>
                    <td>
                        <button @click="eliminar_producto(producto.id)" class="btn btn-outline-danger btn-sm"><i class="fa fa-trash-o"></i></button>
                        <button @click="editar_producto(producto)" class="btn btn-outline-success btn-sm"><i class="fa fa-pencil-square-o"></i></button>
                        
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</div>
</template>
<script>
import {collection, addDoc, onSnapshot,deleteDoc, doc, updateDoc} from '@firebase/firestore'
import {uploadBytes, ref, getDownloadURL}from '@firebase/storage'
import {db, storage} from '../utils/firebase.js'
export default {
    name:'CatalogoAdmin',
    data(){
        return{
            descripcion:'',
            precio:null,
            porcentaje_descuento:null,
            categoria:'',
            stock:null,
            listar_productos:[],
            id:null,
            estado_producto:'',
            estado:0,
            url:null
        }
    },
    methods:{//van funciones que nosotros creamos
    vaciar(){
        this.descripcion=''
        this.precio=''
        this.porcentaje_descuento=''
        this.categoria=''
        this.stock=null
        this.url=null
    },
    async subir_imagen(){
        const file=document.getElementById("inp_file").files[0]
        //vamos a indicar en que lugar vamos a guardar nuestra imagen
        const config=ref(storage,'catalogo/'+file.name)//conserva el nombre que ya tiene
        
        await uploadBytes(config,file).then( ()=> {
            alert('¡Operacion exitosa!')
            document.getElementById("inp_file").value=''
        })
        this.url = await getDownloadURL(config)
    },
    async guardar_producto(){
        await this.subir_imagen()
            const objetoProducto ={
                descripcion: this.descripcion,
                precio:this.precio,
                porcentaje_descuento:this.porcentaje_descuento,
                categoria: this.categoria,
                stock:this.stock,
                url:this.url,
                estado_producto:this.estado_producto

            }
           const coleccion = collection(db,'productos')
            addDoc(coleccion, objetoProducto)
            this.vaciar()
        },
        obtener_productos(){
            onSnapshot( collection(db,'productos'),(snapshot)=>{
                this.listar_productos=[]
                snapshot.docs.map((doc)=>{
                this.listar_productos.push({...doc.data(),id:doc.id})
                })
            })
        },
        eliminar_producto(id){//el (id) espera recibir como parametro el id
        /*Para eliminar, necesito acceso a la base, especificar la collecion(producto)y el ID */
            deleteDoc(doc(db, 'productos',id))
        },
        editar_producto(producto){
            this.descripcion = producto.descripcion;
            this.precio = producto.precio;
            this.porcentaje_descuento = producto.porcentaje_descuento;
            this.categoria = producto.categoria;
            this.stock=producto.stock;
            this.url=producto.url;
            this.estado_producto = producto.estado_producto
            //el atributo id no se usa como v-model
            this.id = producto.id;
            this.estado = 1;
        },
        async actualizar_producto(){
            await this.subir_imagen()
            const productoModificado = {
                descripcion:this.descripcion,
                precio:this.precio,
                porcentaje_descuento:this.porcentaje_descuento,
                categoria:this.categoria,
                stock:this.stock,
                estado_producto:this.estado_producto,
                url:this.url
            }
            updateDoc(doc(db,'productos',this.id),productoModificado)
            this.estado = 0;
            this.vaciar()
        }
    },
    mounted(){//apenas carge la pagina quiero que se inicie la funcion
        this.obtener_productos()
    }
}
</script>