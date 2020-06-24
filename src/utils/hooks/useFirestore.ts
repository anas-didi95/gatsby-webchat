import { useContext } from "react"
import FirebaseContext from "../contexts/FirebaseContext"
import * as Types from "../types"

const useFirestore = () => {
  const { frFirestore } = useContext(FirebaseContext)

  const setUser = async (uid: string, data: Types.User) => {
    try {
      await frFirestore
        .collection("users")
        .doc(uid)
        .set(data)
    } catch (e) {
      console.error("[useFirestore] setUser failed!", e)
      throw e
    }
  }

  return { setUser }
}

export default useFirestore
