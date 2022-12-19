import { app } from './index.js'
import {getFirestore, addDoc, collection, onSnapshot, doc, deleteDoc} from 'firebase/firestore'
import user from '../store/users.js'
import userList from '../store/userslist.js';

//Añadir usuarios
const db = getFirestore(app)
const userRef = collection(db, "users")

const addUser = (user) => {
    addDoc(userRef, user)
}

const deleteUser = (id) => {
    deleteDoc(doc(userRef, id))
}


//obtener usuarios


const getUsers = () => {
    onSnapshot(userRef, (snapshot) => 
    {
        userList.value = []
        snapshot.forEach(doc => {
            const user = {
                id: doc.id,
                name: doc.data().name,
                email: doc.data().email,
                photo: doc.data().photo
            }
        userList.value.push(user)
        })
    })

}




export {addUser, deleteUser, getUsers}