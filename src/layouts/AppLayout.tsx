import React, { ReactNode } from "react"

const AppLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <div className="flex flex-row justify-center items-center h-screen bg-gray-700">
      {children}
    </div>
  )
}

export default AppLayout
