import { useContext } from "react"
import FirebaseContext from "../contexts/FirebaseContext"

const useAuth = () => {
  const firebase = useContext(FirebaseContext)

  const singInWithGoogle = async () => {
    try {
      const userCredential = await firebase.auth.signInWithPopup(firebase.googleProvider)
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
      const userCredential = await firebase.auth.createUserWithEmailAndPassword(
        email,
        password
      )
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
      const userCredential = await firebase.auth.signInWithEmailAndPassword(
        email,
        password
      )
      return userCredential
    } catch (e) {
      console.error("[useAuth] signInWithEmailAndPassword failed!", e)
      throw e
    }
  }

  const getCurrentUser = () => {
    return firebase.auth.currentUser
  }

  const signOut = async () => {
    try {
      await firebase.auth.signOut()
    } catch (e) {
      console.error("[useAuth] signOut failed!", e)
      throw e
    }
  }

  return {
    singInWithGoogle,
    signUpwithEmailAndPassword,
    signInWithEmailAndPassword,
    getCurrentUser,
    signOut,
  }
}

export default useAuth
