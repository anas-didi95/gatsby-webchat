import React from "react"

const FormField: React.FC<{
  type: "text" | "password"
  name: string
  label: string
}> = ({ type, name, label }) => (
  <div className="mb-4">
    <label
      className="block text-gray-700 text-sm font-bold mb-2"
      htmlFor={name}>
      {label}
    </label>
    <input
      className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      type={type}
      placeholder={label}
    />
    <p className="text-red-500 text-xs italic mt-1">
      Please choose a password.
    </p>
  </div>
)

export default FormField
