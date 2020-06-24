import React, { ReactNode } from "react"

const AppLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      {children}
    </>
  )
}

export default AppLayout
