import { useContext } from "react"
import FirebaseContext from "../contexts/FirebaseContext"
import * as Types from "../types"

const useFirestore = () => {
  const firebase = useContext(FirebaseContext)

  const setUser = async (uid: string, data: Types.User) => {
    try {
      await firebase.firestore
        .collection("users")
        .doc(uid)
        .set(data)
    } catch (e) {
      console.error("[useFirestore] setUser failed!", e)
      throw e
    }
  }

  const getUser = async (uid: string) => {
    try {
      const user = await firebase.firestore
        .collection("users")
        .doc(uid)
        .get()
      return user
    } catch (e) {
      console.error("[useFirestore] getUser failed!", e)
      throw e
    }
  }

  const addChannel = async (channelName: string) => {
    try {
      await firebase.firestore.collection("channels").add({
        channelName: channelName,
      })
    } catch (e) {
      console.error("[useFirestore] addChannel failed!", e)
      throw e
    }
  }

  return { setUser, getUser, addChannel }
}

export default useFirestore
