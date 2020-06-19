import React, { ReactNode } from "react"
import Box from "./Box"

const Form: React.FC<{ children: ReactNode }> = ({ children }) => (
  <Box>
    <form>{children}</form>
  </Box>
)

export default Form
