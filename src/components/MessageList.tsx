import React, { useContext } from "react"
import * as Types from "../utils/types"
import AuthContext from "../utils/contexts/AuthContext"
import { oc } from "ts-optchain"
import * as Commons from "../utils/commons"

const MessageList: React.FC<{
  messageList: Types.Message[]
  userHandleName: { [key: string]: string }
}> = ({ messageList, userHandleName }) => {
  const { getUserUid } = useContext(AuthContext)

  return (
    <>
      {messageList.map((message, i) => (
        <Message
          key={`chat${i}`}
          message={message}
          isUser={getUserUid() === message.createBy}
          handleName={userHandleName[oc(message).createBy("")]}
        />
      ))}
    </>
  )
}

const Message: React.FC<{
  message: Types.Message
  isUser: boolean
  handleName: string
}> = ({ message, isUser, handleName }) => (
  <div
    className={`flex my-2 px-4 py-2 rounded-md ${
      isUser ? "justify-end" : "justify-start"
    }`}>
    <div
      className={`w-3/5 px-4 py-2 rounded-md ${
        isUser ? "bg-green-200" : "bg-white"
      }`}>
      <p>{message.value}</p>
      <div className="flex justify-between mt-2 text-sm italic">
        <p>{handleName}</p>
        <p>{Commons.convertFirebaseDateToLocaleString(message.createDate)}</p>
      </div>
    </div>
  </div>
)

export default MessageList
