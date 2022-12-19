import { app } from "./index.js";
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import user from "../store/users.js";

const provider = new GoogleAuthProvider();
const auth = getAuth(app)

const loginWithGoogle = () => {
    signInWithPopup(auth, provider)
  .then((result) => {
    console.log(result)
    let NewUser = {
        name: result.user.displayName,
        email: result.user.email,
        photo: result.user.photoURL,
    }
    user.value.push(NewUser)
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

export {loginWithGoogle, logout}