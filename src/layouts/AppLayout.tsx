import React, { ReactNode, useContext } from "react"
import Loader from "../components/Loader"
import LoaderContext from "../utils/contexts/LoaderContext"
import SEO from "../components/SEO"

const AppLayout: React.FC<{ children: ReactNode; title: string }> = ({
  children,
  title,
}) => {
  const { isLoading } = useContext(LoaderContext)

  return (
    <>
      <SEO title={title} />
      {isLoading ? <Loader /> : children}
    </>
  )
}

export default AppLayout
