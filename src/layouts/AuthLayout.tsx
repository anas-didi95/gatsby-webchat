import React, { ReactNode, useState, useEffect } from "react"
import useAuth from "../utils/hooks/useAuth"
import { navigate } from "gatsby"

const AuthLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isShow, setShow] = useState(false)
  const { getCurrentUser } = useAuth()

  useEffect(() => {
    const user = getCurrentUser()
    if (user) {
      setShow(true)
    } else {
      navigate("/login")
    }
  }, [])

  return <>{isShow && children}</>
}

export default AuthLayout
