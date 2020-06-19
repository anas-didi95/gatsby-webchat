import React, { ReactNode } from "react"

const Box: React.FC<{ children: ReactNode }> = ({ children }) => (
  <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    {children}
  </div>
)

export default Box
