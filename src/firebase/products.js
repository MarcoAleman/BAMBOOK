import { app } from './index.js'
import { getFirestore, addDoc, collection, onSnapshot, deleteDoc, doc} from 'firebase/firestore'
import  products  from '../store/productsStore'

const db = getFirestore(app)
const productsRef = collection(db, "products")

const addProduct = (product) => {
    addDoc(productsRef, product)
}

const getProducts = () => {
    onSnapshot(productsRef, (snapshot) => {
        products.value = [];
        snapshot.forEach(doc => {
            let product = {
                id: doc.id,
                date: doc.data().date,
                name: doc.data().name,
                price: doc.data().price,
                discount: doc.data().discount,
                description: doc.data().description,
                stock: doc.data().stock,
            }

            products.value.push(product);
        })
        //logica de ordenamiento??
    })
}


export { getProducts, addProduct }