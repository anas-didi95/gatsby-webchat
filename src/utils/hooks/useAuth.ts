import { useContext } from "react"
import FirebaseContext from "../contexts/FirebaseContext"

const useAuth = () => {
  const { app, googleProvider } = useContext(FirebaseContext)

  const singInWithGoogle = async () => {
    try {
      const userCredential = await app.auth().signInWithPopup(googleProvider)
      return userCredential
    } catch (e) {
      console.error("[useAuth] singInWithGoogle failed!", e)
      throw e
    }
  }

  const signUpwithEmailandPassword = async (
    email: string,
    password: string
  ) => {
    try {
      const userCredential = await app
        .auth()
        .createUserWithEmailAndPassword(email, password)
      return userCredential
    } catch (e) {
      console.log("[useAuth] signUpwithEmailandPassword failed!", e)
      throw e
    }
  }

  return { singInWithGoogle, signUpwithEmailandPassword }
}

export default useAuth
