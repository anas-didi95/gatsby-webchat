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
    { name: "Hello 3" },
    { name: "Hello 3" },
    { name: "Hello 3" },
    { name: "Hello 3" },
    { name: "Hello 3" },
    { name: "Hello 3" },
    { name: "Hello 3" },
    { name: "Hello 3" },
    { name: "Hello 3" },
    { name: "Hello 3" },
    { name: "Hello 3" },
    { name: "Hello 3" },
    { name: "Hello 3" },
    { name: "Hello 3" },
    { name: "Hello 3" },
    { name: "Hello 3" },
  ]

  return (
    <div className="flex">
      <div className="w-3/12 h-screen max-h-screen overflow-scroll">
        <UserList userList={userList} />
      </div>
      <div className="w-9/12 h-screen max-h-screen">
        <Header />
      </div>
    </div>
  )
}

export default IndexPage
