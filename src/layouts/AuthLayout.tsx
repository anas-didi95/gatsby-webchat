import React, { ReactNode, useState, useEffect, useContext } from "react"
import { navigate } from "gatsby"
import AuthContext from "../utils/contexts/AuthContext"

const AuthLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isShow, setShow] = useState(false)
  const { isLoggedIn } = useContext(AuthContext)

  useEffect(() => {
    console.log("OK")
    console.log(isLoggedIn)
    if (isLoggedIn()) {
      setShow(true)
    } else {
      navigate("/login")
    }
  }, [])

  return <>{isShow && children}</>
}

export default AuthLayout
