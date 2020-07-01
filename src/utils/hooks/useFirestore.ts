import { useContext } from "react"
import FirebaseContext from "../contexts/FirebaseContext"
import * as Types from "../types"
import AuthContext from "../contexts/AuthContext"

const useFirestore = () => {
  const firebase = useContext(FirebaseContext)
  const { getUserUid } = useContext(AuthContext)

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
      let channel: Types.Channel = {
        channelName: channelName,
        createBy: getUserUid(),
        createDate: new Date(),
      }
      await firebase.firestore.collection("channels").add(channel)
    } catch (e) {
      console.error("[useFirestore] addChannel failed!", e)
      throw e
    }
  }

  const listenChannelList = (callback: Function) => {
    try {
      return firebase.firestore
        .collection("channels")
        .orderBy("createDate", "desc")
        .onSnapshot(docs => {
          let channelList: Types.Channel[] = []
          docs.forEach(doc => {
            channelList.push({
              uid: doc.id,
              channelName: doc.get("channelName"),
            })
          })
          callback(channelList)
        })
    } catch (e) {
      console.error("[useFirestore] listenChannelList failed!", e)
      throw e
    }
  }

  return { setUser, getUser, addChannel, listenChannelList }
}

export default useFirestore
