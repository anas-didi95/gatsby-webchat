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

  return { singInWithGoogle }
}

export default useAuth
