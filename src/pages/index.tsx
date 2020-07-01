import React, { useContext, useEffect, useState } from "react"
import Header from "../components/Header"
import UserList from "../components/UserList"
import * as Types from "../utils/types"
import MessageField from "../components/MessageField"
import ChatList from "../components/ChatList"
import AppLayout from "../layouts/AppLayout"
import AuthLayout from "../layouts/AuthLayout"
import AuthContext from "../utils/contexts/AuthContext"
import { navigate } from "gatsby"
import useAuth from "../utils/hooks/useAuth"
import LoaderContext from "../utils/contexts/LoaderContext"

const IndexPage: React.FC<{}> = () => {
  const { isUserLoaded } = useContext(AuthContext)
  const { signOut } = useAuth()
  const { onLoading, offLoading } = useContext(LoaderContext)

  const handler = {
    handleLogOut: async () => {
      onLoading()
      let hasSignOut = false
      try {
        await signOut()
        hasSignOut = true
      } catch (e) {
        alert(e.message)
      }
      offLoading()
      if (hasSignOut) {
        navigate("/login")
      }
    },
  }

  let userList: Types.User[] = [
    //{ handleName: "Hello" },
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
    <AuthLayout>
      <AppLayout>
        <div className="flex h-screen">
          <div className="w-3/12 h-full overflow-scroll">
            <UserList userList={userList} />
          </div>
          <div className="w-9/12 h-full">
            <div>
              <Header handleLogOut={handler.handleLogOut} />
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
      </AppLayout>
    </AuthLayout>
  )
}

export default IndexPage
