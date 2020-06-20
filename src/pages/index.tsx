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
          <div className="flex">
            <input
              type="text"
              className="px-3 py-2 mr-2 leading-tight text-gray-700 border rounded shadow appearance-none md:w-11/12 sm:w-10/12 focus:outline-none focus:shadow-outline"
              id="username"
              placeholder="Username"
            />
            <button className="px-4 py-2 font-bold text-white bg-blue-500 rounded md:w-1/12 sm:w-2/12 hover:bg-blue-700">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default IndexPage
