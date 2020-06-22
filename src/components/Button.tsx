import React from "react"

const Button: React.FC<{
  type: "primary" | "link"
  value: string
  onClick: any
}> = ({ type, value, onClick }) => (
  <>
    {
      {
        primary: (
          <button
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
            type="button"
            onClick={onClick}>
            {value}
          </button>
        ),
        link: (
          <button
            className="px-4 py-2 text-blue-500 cursor-pointer hover:bg-gray-300"
            onClick={onClick}>
            {value}
          </button>
        ),

        default: <button>Undefined type: {type}</button>,
      }[type]
    }
  </>
)

export default Button
