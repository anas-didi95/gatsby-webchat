import React, { ReactNode, useContext } from "react"
import Loader from "../components/Loader"
import LoaderContext from "../utils/contexts/LoaderContext"

const AppLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { isLoading } = useContext(LoaderContext)

  return <>{isLoading ? <Loader /> : children}</>
}

export default AppLayout
