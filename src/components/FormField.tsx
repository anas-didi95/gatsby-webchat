import React from "react"

const FormField: React.FC<{
  type: "email" | "password"
  name: string
  value: string
  error?: string
}> = ({ name, value, type, error }) => (
  <div className="mt-4">
    <label
      className="block mb-2 text-sm font-bold text-gray-700"
      htmlFor={name}>
      {value}
    </label>
    <input
      className={`w-full px-3 py-2 mb-3 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline ${
        error ? "border-red-500" : ""
      }`}
      type={type}
    />
    {error && <p className="text-xs italic text-red-500">{error}</p>}
  </div>
)

export default FormField
