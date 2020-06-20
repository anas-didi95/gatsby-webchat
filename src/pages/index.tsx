import React from "react"
import Header from "../components/Header"
import UserList from "../components/UserList"
import * as Types from "../utils/types"
import MessageField from "../components/MessageField"
import ChatList from "../components/ChatList"

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

  let chatList: Types.Chat[] = [
    { message: "Hello world", isUser: true },
    { message: "Hello world", isUser: true },
    { message: "Hello world", isUser: false },
    { message: "Hello world", isUser: true },
    { message: "Hello world", isUser: true },
    { message: "Hello world", isUser: true },
    { message: "Hello world", isUser: true },
    { message: "Hello world", isUser: false },
    {
      message:
        "Hello world lksajf;saljf;aksjf;lsajf;lksajd ;ajsdf;kjas;fjas;lfdkj akajsd;fkja;f",
      isUser: true,
    },
    { message: "Hello world", isUser: true },
    {
      message:
        "Hello world afasfsadfsafsadfjsaf;lsajf;lsaj as;lfjsa;fjas;lfjsa;lkfjdsa;l as;kjfsa;lkfj  a;sdkjf;lsajfa;skfjsa;ldj ",
      isUser: false,
    },
    { message: "Hello world", isUser: true },
    { message: "Hello world", isUser: true },
  ]

  return (
    <div className="flex">
      <div className="w-3/12 h-screen overflow-scroll">
        <UserList userList={userList} />
      </div>
      <div className="w-9/12 h-screen">
        <div>
          <Header />
        </div>
        <div
          className="px-8 py-4 overflow-scroll overflow-x-hidden bg-gray-300"
          style={{ height: "80%" }}>
          <ChatList chatList={chatList} />
        </div>
        <div className="px-4 py-6 bg-gray-500">
          <MessageField />
        </div>
      </div>
    </div>
  )
}

export default IndexPage
