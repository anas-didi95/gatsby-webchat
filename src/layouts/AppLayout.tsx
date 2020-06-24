import React, { ReactNode } from "react"
import Loader from "../components/Loader"

const AppLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  const isLoading = true

  return <>{isLoading ? <Loader /> : children}</>
}

export default AppLayout
