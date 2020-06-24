import { useContext } from "react"
import FirebaseContext from "../contexts/FirebaseContext"

const useAuth = () => {
  const { frAuth, googleProvider } = useContext(FirebaseContext)

  const singInWithGoogle = async () => {
    try {
      const userCredential = await frAuth.signInWithPopup(googleProvider)
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
      const userCredential = await frAuth.createUserWithEmailAndPassword(
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
      const userCredential = await frAuth.signInWithEmailAndPassword(
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
    return frAuth.currentUser
  }

  return {
    singInWithGoogle,
    signUpwithEmailAndPassword,
    signInWithEmailAndPassword,
    getCurrentUser,
  }
}

export default useAuth
