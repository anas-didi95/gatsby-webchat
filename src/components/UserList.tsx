import React from "react"
import * as Types from "../utils/types"

const UserList: React.FC<{ userList: Types.User[] }> = ({ userList }) => (
  <>
    {userList.map((user, i) => (
      <User key={`user${i}`} user={user} />
    ))}
  </>
)

const User: React.FC<{ user: Types.User }> = ({ user }) => (
  <>
    <div className="px-8 py-4 cursor-pointer hover:bg-gray-300">
      <p className="text-lg font-semibold">{user.name}</p>
    </div>
    <hr />
  </>
)

export default UserList
