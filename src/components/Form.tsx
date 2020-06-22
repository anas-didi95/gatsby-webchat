import React, { ReactNode } from "react"

const Form: React.FC<{ children: ReactNode; title: string }> = ({
  children,
  title,
}) => (
  <form>
    <p className="my-4 text-lg font-bold">{title}</p>
    {children}
  </form>
)

export default Form
