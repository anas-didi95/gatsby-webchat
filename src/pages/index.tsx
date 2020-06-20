import React from "react"
import Header from "../components/Header"
import UserList from "../components/UserList"
import * as Types from "../utils/types"
import MessageField from "../components/MessageField"

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
      <div className="w-3/12 h-screen overflow-scroll">
        <UserList userList={userList} />
      </div>
      <div className="w-9/12 h-screen">
        <div style={{ height: "10%" }}>
          <Header />
        </div>
        <div
          className="overflow-scroll overflow-x-hidden"
          style={{ height: "80%" }}>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
          <p>Hello</p>
        </div>
        <div className="p-4 bg-gray-300" style={{ height: "10%" }}>
          <MessageField />
        </div>
      </div>
    </div>
  )
}

export default IndexPage
