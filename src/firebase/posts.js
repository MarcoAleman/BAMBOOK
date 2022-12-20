import { app } from './index.js'
import { getFirestore, addDoc, collection, onSnapshot, deleteDoc, doc} from 'firebase/firestore'
import  posts  from '../store/postStore.js'

const db = getFirestore(app)
const postRef = collection(db, "posts")

const addPost = (post) => {
    addDoc(postRef, post)
}
const getPosts = () =>{
    onSnapshot(postRef, (snapshot) =>{
        posts.value = []
        snapshot.forEach(doc => {
            let newPost = {
                id: doc.id,
                date: doc.data().date,
                name: doc.data().name,
                email: doc.data().email,
                message: doc.data().message,
                photo: doc.data().photo,
            }
            console.log('no se que soy', posts);
            console.log('SOY EL NUEVO POST', newPost);
            posts.value.push(newPost)
        })
    })
}

export { getPosts, addPost }
