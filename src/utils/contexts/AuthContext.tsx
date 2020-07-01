import React, { createContext, useState, useContext, ReactNode } from "react"
import * as Types from "../types"
import FirebaseContext from "./FirebaseContext"
import useFirestore from "../hooks/useFirestore"
import { oc } from "ts-optchain"
import useAuth from "../hooks/useAuth"

const defauttUser: Types.User = {
  handleName: "",
  uid: "",
}

const AuthContext = createContext<{
  user: Types.User
  isLoggedIn: { (): boolean }
  isUserLoaded: { (): boolean }
  updateAuth: { (): Promise<void> }
  getUserUid: { (): string }
}>({
  user: defauttUser,
  isLoggedIn: () => false,
  isUserLoaded: () => false,
  updateAuth: async () => {},
  getUserUid: () => "",
})

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<Types.User>(defauttUser)
  const auth = useAuth()
  const firestore = useFirestore()

  const isLoggedIn = () => {
    return !!auth.getCurrentUser()
  }

  const isUserLoaded = () => {
    return oc(auth.getCurrentUser()).uid("") === user.uid
  }

  const updateAuth = async () => {
    try {
      const frUser = await firestore.getUser(oc(auth.getCurrentUser()).uid(""))
      if (frUser) {
        setUser(prev => ({
          ...prev,
          handleName: frUser.get("handleName"),
          uid: frUser.get("uid"),
        }))
      } else {
        setUser(prev => defauttUser)
      }
    } catch (e) {
      console.error("[AuthProvider] updateAuth failed!", e)
      throw e
    }
  }

  const getUserUid = () => {
    return user.uid
  }

  return (
    <AuthContext.Provider
      value={{ user, isLoggedIn, isUserLoaded, updateAuth, getUserUid }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthContext
export { AuthProvider }
