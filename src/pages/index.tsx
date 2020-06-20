import React from "react"
import Header from "../components/Header"
import UserList from "../components/UserList"
import * as Types from "../utils/types"

const IndexPage: React.FC<{}> = () => {
  let userList: Types.User[] = [
    { name: "Hello" },
    { name: "Hello 1" },
    { name: "Hello 2" },
    { name: "Hello 3" },
  ]

  return (
    <div className="">
      <Header />
      <div className="flex max-h-full">
        <UserList userList={userList} />
      </div>
    </div>
  )
}

export default IndexPage
