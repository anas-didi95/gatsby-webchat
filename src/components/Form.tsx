import React, { ReactNode } from "react"

const Form: React.FC<{ children: ReactNode }> = ({ children }) => (
  <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
    {children}
  </form>
)

export default Form
