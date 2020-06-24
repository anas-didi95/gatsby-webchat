import React from "react"
import { GrLogout } from "react-icons/gr"

const Header: React.FC<{}> = () => (
  <div className="flex items-center justify-between px-8 py-4 text-white bg-green-700">
    <p className="text-2xl font-bold">WebChat</p>
    <p className="text-2xl text-white cursor-pointer">
      <GrLogout className="fill-current" />
    </p>
  </div>
)

export default Header
