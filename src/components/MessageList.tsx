import React, { useContext } from "react"
import * as Types from "../utils/types"
import AuthContext from "../utils/contexts/AuthContext"

const MessageList: React.FC<{ messageList: Types.Message[] }> = ({
  messageList,
}) => {
  const { getUserUid } = useContext(AuthContext)

  return (
    <>
      {messageList.map((message, i) => (
        <Message
          key={`chat${i}`}
          message={message}
          isUser={getUserUid() === message.createBy}
        />
      ))}
    </>
  )
}

const Message: React.FC<{ message: Types.Message; isUser: boolean }> = ({
  message,
  isUser,
}) => (
  <div className={`flex mb-2 ${isUser ? "justify-end" : "justify-start"}`}>
    <p
      className={`w-3/5 px-4 py-2 rounded-md ${
        isUser ? "bg-green-200" : "bg-white"
      }`}>
      {message.value}
    </p>
  </div>
)

export default MessageList
