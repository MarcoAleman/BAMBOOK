import { app } from "./index.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import user from "../store/users.js";


const auth = getAuth(app)
const provider = new GoogleAuthProvider();

const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log('resultados', result)
        let newUser = {
            name: result.user.displayName,
            email: result.user.email,
            photo: result.user.photoURL,
        }
      user.value = {
        ...newUser
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