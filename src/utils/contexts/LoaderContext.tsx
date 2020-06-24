import React, { createContext, ReactNode, useState } from "react"

interface ILoaderContext {
  isLoading: boolean
  offLoading: { (): void }
  onLoading: { (): void }
}

const LoaderContext = createContext<ILoaderContext>({
  isLoading: false,
  offLoading: () => {},
  onLoading: () => {},
})

const LoaderProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isLoading, setLoading] = useState(false)
  const onLoading = () => setLoading(true)
  const offLoading = () => setLoading(false)

  return (
    <LoaderContext.Provider value={{ isLoading, onLoading, offLoading }}>
      {children}
    </LoaderContext.Provider>
  )
}

export default LoaderContext
export { LoaderProvider }
