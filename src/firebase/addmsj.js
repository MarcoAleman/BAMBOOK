import {
    app
} from './index.js'
import {
    getFirestore,
    addDoc,
    collection,
    setDoc,
    doc,
    onSnapshot
} from 'firebase/firestore'
import chats from '../store/chatStore.js'
import mail from '../store/userMail.js'
// import  posts  from '../store/postStore.js'
import user from '../store/users.js'
import {
    ref
} from 'vue'
import {
    query,
    where,
    getDocs
} from "firebase/firestore"
import { userRef } from './users.js'

const ids = ref(null)
const consulta12 = ref(null)
const consulta21 = ref(null)
const consulta123 = ref(null)

const db = getFirestore(app)

//añade id de chats a cada usuario
async function addId (id1, id) {
    await consulta1()
    await consulta2()
    setDoc(doc(db, "users", consulta12.value, "chats", id1), id)
    setDoc(doc(db, "users", consulta21.value, "chats", id1) , id)
    }


//id usuario
const consulta1 = (async () => {
    let q = (query(userRef, where("email", "==", user.value.email)))
    const querySnapshot = await getDocs(q);
    consulta12.value = ([])
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        consulta12.value = doc.id
        console.log(consulta12.value);
    })
})

//id usuario2
const consulta2 = (async () => {
    let q = (query(userRef, where("email", "==", mail.value)))
    const querySnapshot = await getDocs(q);
    consulta21.value = ([])
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        consulta21.value = doc.id
        console.log(consulta21.value);
    })
})


//mensaje nuevo
function addMessage (id ,chat) {
    addDoc(collection(db, "chats", id, "message"), chat)
}

//descargar chats
const getchats = (id) =>{
    onSnapshot(collection(db, "chats", id, "message"), (snapshot) =>{
        chats.value = []
        snapshot.forEach(doc => {
            let chat = {
                id: doc.id,
                date: doc.data().dates,
                name: doc.data().user,
                message: doc.data().text,
            }
            chats.value.unshift(chat)
        })
        chats.value.sort((a, b) => b.date - a.date )
        console.log(chats.value);
    })
}

export {addMessage, getchats, addId}