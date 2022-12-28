import { app } from "./index.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, TwitterAuthProvider, signOut } from "firebase/auth";
import user from "../store/users.js";
import { userRef } from "./users.js";
import { query, where, getDocs } from "firebase/firestore"
import { addUser } from "./users.js";


const auth = getAuth(app)
const provider = new GoogleAuthProvider();
const twitterProvider = new TwitterAuthProvider();

const loginWithGoogle = async () => {
    signInWithPopup(auth, provider)
      .then(async(result) => {
        console.log('resultados', result)
        let newUser = {
            name: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL,
        }
        localStorage.setItem('user',JSON.stringify(newUser))
        user.value = {
            ...newUser
        }
    let q = (query(userRef, where("email", "==", user.value.email)))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
    if (querySnapshot.docs.length == []) {
      addUser(newUser)
    }
  }).catch((error) => {
    console.log(error);
  });
}

const loginWithTwitter = async () => {
  console.log('click');
    signInWithPopup(auth, twitterProvider)
      .then(async(result) => {
        console.log('resultados', result)
        /* let newUser = {
            name: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL,
        }
        localStorage.setItem('user',JSON.stringify(newUser))
        user.value = {
            ...newUser
        } */
    /* let q = (query(userRef, where("email", "==", user.value.email)))
    const querySnapshot = await getDocs(q);
    querySnapshot.forEach((doc) => {
      console.log(doc.id, " => ", doc.data());
    });
    if (querySnapshot.docs.length == []) {
      addUser(newUser)
    } */
  }).catch((error) => {
    console.log(error);
  });
}


const logout = () => {signOut(auth).then(() => {
  user.value = null
  localStorage.setItem('user',null)
}).catch((error) => {
  console.log(error)
});
}

export {loginWithGoogle, loginWithTwitter, logout, user}