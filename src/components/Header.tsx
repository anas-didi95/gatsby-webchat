import React from "react"

const Header: React.FC<{ handleLogOut: any; channelName: string }> = ({
  handleLogOut,
  channelName,
}) => (
  <div className="flex items-center justify-between px-8 py-4 text-white bg-green-700">
    <p className="text-2xl font-bold">
      {!!channelName ? "#" + channelName : "WebChat"}
    </p>
    <button
      className="px-4 py-2 text-sm font-semibold text-white border border-white cursor-pointer"
      onClick={handleLogOut}>
      Sign Out
    </button>
  </div>
)

export default Header
