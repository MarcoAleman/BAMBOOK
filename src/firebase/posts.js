import { app } from './index.js'
import { getFirestore, addDoc, collection, onSnapshot, deleteDoc, doc} from 'firebase/firestore'
import  posts  from '../store/postStore.js'
import user from '../store/users.js'

const db = getFirestore(app)
const postRef = collection(db, "posts")

const addPost = (post) => {
    addDoc(postRef, post)
}
const getPosts = () =>{
    onSnapshot(postRef, (snapshot) =>{
        posts.value = []
        snapshot.forEach(doc => {
            let post = {
                id: doc.id,
                date: doc.data().date,
                name: doc.data().name,
                email: doc.data().email,
                message: doc.data().message,
                photo: doc.data().photo,
            }
            posts.value.push(post)
        })
        posts.value.sort((o1, o2) => o2.date - o1.date)
    })
}

const deletePost = (id, email) => {
    if (user !== null && user.value.email == email){
        deleteDoc(doc(postRef, id))
    }
}

export { getPosts, addPost, deletePost }
