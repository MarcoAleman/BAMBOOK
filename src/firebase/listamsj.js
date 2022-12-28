import user from "../store/users";
import { ref } from "vue";
import {collection, onSnapshot, deleteDoc, doc} from 'firebase/firestore'
import { db } from "./users";

const general = (id) => {
    getChatUser(id)
    getChatsid
}

const idchat = ref([])
const chatsPersona = ref([])


const getChatUser = async (id) =>{
    console.log(idchat.value[0])
    onSnapshot(collection(db, "users", idchat.value[0].toString() , "chats" ), (snapshot) =>{
        chatsPersona.value = []
        snapshot.forEach(doc => {
            let chat = {
                id: doc.id,
            }
            chatsPersona.value.push(chat)  
        })
        console.log(chatsPersona.value);
    })
}


const getChatsid = async () =>{
    console.log(idchat.value[0])
    onSnapshot(collection(db, "chats"), (snapshot) =>{
        chatsPersona.value = []
        snapshot.forEach(doc => {
            let chat = {
                id: doc.id,
            }
            chatsPersona.value.push(chat)  
        })
        console.log(chatsPersona.value);
    })
}


// let q = (query(userRef, where("email", "==", user.value.email)))
//     const querySnapshot = await getDocs(q);
//     querySnapshot.forEach((doc) => {
//       console.log(doc.id, " => ", doc.data());
//       idchat.value = []
//       idchat.value.push(doc.id)
//       console.log(idchat.value[0])
//       getChatUser(idchat.value[0])

export {idchat, getChatUser, } 