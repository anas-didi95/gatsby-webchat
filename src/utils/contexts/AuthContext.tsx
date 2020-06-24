import React, { createContext, useState, useContext, ReactNode } from "react"
import * as Types from "../types"
import FirebaseContext from "./FirebaseContext"
import useFirestore from "../hooks/useFirestore"

const defauttUser: Types.User = {
  handleName: ""
}

const AuthContext = createContext<{
  user: Types.User,
  isLoggedIn: { (): boolean }
}>({ user: defauttUser, isLoggedIn: () => false })

const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<Types.User>(defauttUser)
  const { frAuth } = useContext(FirebaseContext)
  const { getUser } = useFirestore()

  frAuth.onAuthStateChanged(async (user) => {
    if (user) {
      const userFr = await getUser(user.uid)
      setUser({
        handleName: userFr.get("handleName")
      })
    }
  }, e => {
    console.log("[AuthProvider] onAuthStateChanged failed!", e)
    throw e
  })

  const isLoggedIn = () => {
    console.log("isLoggedIn", !!frAuth.currentUser)
    return !!frAuth.currentUser
  }

  return <AuthContext.Provider value={{ user, isLoggedIn }}>{children}</AuthContext.Provider>
}

export default AuthContext
export { AuthProvider }
