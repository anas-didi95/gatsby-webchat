import React from "react"
import { FcGoogle } from "react-icons/fc"
import { GrMailOption } from "react-icons/gr"

const socialType = {
  google: {
    value: "Google",
    icon: <FcGoogle />,
    bgColor: "bg-gray-300 hover:bg-gray-400",
  },
  email: {
    value: "Email",
    icon: <GrMailOption />,
    bgColor: "bg-red-300 hover:bg-red-400",
  },
}

const SocialLoginButton: React.FC<{
  onClick: any
  type: "google" | "email"
}> = ({ onClick, type }) => (
  <button
    className={`inline-flex items-center justify-center w-full px-4 py-2 mb-4 font-bold rounded ${socialType[type].bgColor}`}
    onClick={onClick}>
    {socialType[type].icon}
    <span className="ml-2 text-black">
      Sign In with {socialType[type].value}
    </span>
  </button>
)

export default SocialLoginButton
