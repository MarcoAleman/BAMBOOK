import { app } from "./index.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import user from "../store/users.js";
import { userRef } from "./users.js";
import { query, where, getDocs } from "firebase/firestore"
import { addUser } from "./users.js";


const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const loginWithGoogle = async () => {
    signInWithPopup(auth, provider)
      .then(async(result) => {
        console.log('resultados', result)
        let newUser = {
            name: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL,
        }
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
 

const logout = () => {signOut(auth).then(() => {
  user.value = []
}).catch((error) => {
  console.log(error)
});
}

export {loginWithGoogle, logout, user}