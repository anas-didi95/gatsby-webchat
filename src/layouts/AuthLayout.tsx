import React, { ReactNode, useState, useEffect, useContext } from "react"
import { navigate } from "gatsby"
import AuthContext from "../utils/contexts/AuthContext"

const AuthLayout: React.FC<{ children: ReactNode; userLoaded: boolean }> = ({
  children,
  userLoaded,
}) => {
  const [isShow, setShow] = useState(false)
  const { isLoggedIn, isUserLoaded } = useContext(AuthContext)

  useEffect(() => {
    if (isLoggedIn()) {
      if (userLoaded && !isUserLoaded()) {
        navigate("/welcome")
      } else {
        setShow(true)
      }
    } else {
      navigate("/login")
    }
  }, [])

  return <>{isShow && children}</>
}

export default AuthLayout
