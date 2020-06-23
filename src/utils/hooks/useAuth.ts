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

  const signUpwithEmailAndPassword = async (
    email: string,
    password: string
  ) => {
    try {
      const userCredential = await app
        .auth()
        .createUserWithEmailAndPassword(email, password)
      return userCredential
    } catch (e) {
      console.error("[useAuth] signUpwithEmailandPassword failed!", e)
      throw e
    }
  }

  const signInWithEmailAndPassword = async (
    email: string,
    password: string
  ) => {
    try {
      const userCredential = await app
        .auth()
        .signInWithEmailAndPassword(email, password)
      return userCredential
    } catch (e) {
      console.error("[useAuth] signInWithEmailAndPassword failed!", e)
      throw e
    }
  }

  return {
    singInWithGoogle,
    signUpwithEmailAndPassword,
    signInWithEmailAndPassword,
  }
}

export default useAuth
