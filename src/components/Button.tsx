import React from "react"

const Button: React.FC<{ value: string }> = ({ value }) => (
  <button
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
    type="button">
    {value}
  </button>
)

export default Button
