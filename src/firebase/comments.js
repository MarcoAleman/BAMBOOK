import { app } from './index.js'
import { getFirestore, addDoc, collection, onSnapshot, deleteDoc, doc} from 'firebase/firestore'
import  comments  from '../store/commentStore'
const db = getFirestore(app)
const commentRef = collection(db, "comments")

const addComment = (comment) => {
    addDoc(commentRef, comment) 
}

const getComments = () =>{
    onSnapshot(commentRef, (snapshot) =>{
        comments.value = []
        snapshot.forEach(doc => {
            let comment = {
                id: doc.id,
                postId: doc.data().postId,
                date: doc.data().date,
                name: doc.data().name,
                email: doc.data().email,
                text: doc.data().text,
                photo: doc.data().photo,
            }
            comments.value.push(comment)
        })
    })
}

export { getComments, addComment }
