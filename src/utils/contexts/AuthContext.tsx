import React, { createContext, useState, useContext, ReactNode } from "react"
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
  const firebase = useContext(FirebaseContext)
  const { getUser } = useFirestore()

  const isLoggedIn = () => {
    return true
  }

  const isUserLoaded = () => {
    return oc(firebase).auth.currentUser.uid("") === user.uid
  }

  const updateAuth = async () => {
    try {
      const frUser = await getUser(oc(firebase).auth.currentUser.uid(""))
      setUser(prev => ({
        ...prev,
        handleName: frUser.get("handleName"),
        uid: frUser.get("uid"),
      }))
    } catch (e) {
      console.error("[AuthProvider] updateAuth failed!", e)
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
