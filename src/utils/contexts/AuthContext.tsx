import React, {
  createContext,
  useState,
  useContext,
  ReactNode,
  useImperativeHandle,
} from "react"
import * as Types from "../types"
import FirebaseContext from "./FirebaseContext"
import useFirestore from "../hooks/useFirestore"
import { oc } from "ts-optchain"

const defauttUser: Types.User = {
  handleName: "",
  uid: "",
}

const AuthContext = createContext<{
  user: Types.User
  isLoggedIn: { (): boolean }
  isUserLoaded: { (): boolean }
  updateAuth: { (): Promise<void> }
}>({
  user: defauttUser,
  isLoggedIn: () => false,
  isUserLoaded: () => false,
  updateAuth: async () => {},
})

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<Types.User>(defauttUser)
  const { frAuth } = useContext(FirebaseContext)
  const { getUser } = useFirestore()

  frAuth.onAuthStateChanged(
    async user => {
      if (user) {
        const userFr = await getUser(user.uid)
        setUser({
          handleName: userFr.get("handleName"),
          uid: userFr.get("uid"),
        })
      } else {
        setUser(defauttUser)
      }
    },
    e => {
      console.log("[AuthProvider] onAuthStateChanged failed!", e)
      throw e
    }
  )

  const isLoggedIn = () => {
    return !!frAuth.currentUser
  }

  const isUserLoaded = () => {
    return oc(frAuth).currentUser.uid("") === user.uid
  }

  const updateAuth = async () => {
    try {
      const frUser = await getUser(oc(frAuth).currentUser.uid(""))
      setUser({
        handleName: frUser.get("handleName"),
        uid: frUser.get("uid"),
      })
    } catch (e) {
      console.log("[AuthProvider] updateAuth failed!", e)
      throw e
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, isLoggedIn, isUserLoaded, updateAuth }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
export { AuthProvider }
