import React, { ReactNode } from "react"
import AppLayout from "./AppLayout"

const FormLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <AppLayout>
      <div className="flex flex-col justify-center h-screen bg-gray-200">
        <div className="flex justify-center">
          <div className="px-8 py-6 bg-white border rounded-lg shadow md:w-2/5">
            {children}
          </div>
        </div>
      </div>
    </AppLayout>
  )
}

export default FormLayout
