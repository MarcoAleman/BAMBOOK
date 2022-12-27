import {
    app
} from './index.js'
import {
    getFirestore,
    addDoc,
    collection,
    onSnapshot,
    deleteDoc,
    doc
} from 'firebase/firestore'
import {
    query,
    where,
    getDocs
} from "firebase/firestore"
import mail from '../store/userMail.js'
// import  posts  from '../store/postStore.js'
import user from '../store/users.js'
import {
    ref
} from 'vue'
import { addId } from './addmsj.js'
import { getchats } from './addmsj.js'

const db = getFirestore(app)
const chatRef = collection(db, "chats")


const addChat = (chat) => {
    addDoc(chatRef, chat)
}

const consulta1 = ref([])
const consulta2 = ref([])
const idgenerada = ref([])
const idobjeto = ref(null)


async function global() {
    await prueba()
    await prueba2()
    consulta()
}

const prueba = (async () => {
    let q = (query(chatRef, where("user1", "==", user.value.email), where("user2", "==", mail.value)))
    const querySnapshot = await getDocs(q);
    consulta1.value = []
    querySnapshot.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
        consulta1.value = doc.id
        console.log(consulta1.value);
    })
})

const prueba2 = (async () => {
    // if (consulta1 == []) {
        let q = (query(chatRef, where("user1", "==", mail.value), where("user2", "==", user.value.email)))
        const querySnapshot = await getDocs(q);
        consulta2.value = []
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
            consulta2.value = doc.id
            console.log(consulta2.value);
        })
    }
)

async function prueba3() {
        let chatNew = {
            id: user.value.email + mail.value,
            id2: mail.value + user.value.email,
            user1: user.value.email,
            user2: mail.value,
        }
        addChat(chatNew)
        await global()
        addId(idgenerada.value.toString(), {id: idgenerada.value})
    }

function consulta() {
    if (consulta1.value.length > 2) {
        idgenerada.value = []
        idgenerada.value.push(consulta1.value)
        console.log(idgenerada.value)
        getchats(idgenerada.value.toString())
        idobjeto.value = {id: idgenerada.value}
        console.log(idobjeto.value);
    } else if (consulta2.value.length > 2) {
        idgenerada.value = []
        idgenerada.value.push(consulta2.value)
        console.log(idgenerada.value);
        getchats(idgenerada.value.toString())
        idobjeto.value = {id: idgenerada.value}
        console.log(idobjeto.value);
    } else {
        prueba3()
    }
}


export {
    addChat,
    global,
    prueba3,
    idgenerada
}