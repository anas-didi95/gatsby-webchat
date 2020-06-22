import React, { ReactNode } from "react"

const Form: React.FC<{ children: ReactNode }> = ({ children }) => (
  <form>{children}</form>
)

export default Form
