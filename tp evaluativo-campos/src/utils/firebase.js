import{initializeApp}from 'firebase/app'
import{getFirestore}from 'firebase/firestore'
import{getStorage}from 'firebase/storage'
import{getAuth}from 'firebase/auth'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDIgI1wTtEaPDOb16D8B0qoTaGEZH5Gwa0",
    authDomain: "gianinna-p1.firebaseapp.com",
    projectId: "gianinna-p1",
    storageBucket: "gianinna-p1.appspot.com",
    messagingSenderId: "189002221851",
    appId: "1:189002221851:web:70d445322cc9e1d55bebbe",
    measurementId: "G-QL5SD7H755"
};
//iniciamos la conexion entre nuestra app y firebase
const conexion= initializeApp(firebaseConfig)
//me conecto con el servicio de base datos: firestore
const db= getFirestore()
const storage = getStorage(conexion)
const auth = getAuth()//guardamos lo que la funcion retorna
export {db , storage,auth}