import React from "react"
import * as Types from "../utils/types"

const ChatList: React.FC<{ chatList: Types.Chat[] }> = ({ chatList }) => (
  <>
    {chatList.map((chat, i) => (
      <Chat key={`chat${i}`} chat={chat} />
    ))}
  </>
)

const Chat: React.FC<{ chat: Types.Chat }> = ({ chat }) => (
  <div className={`flex mb-2 ${chat.isUser ? "justify-end" : "justify-start"}`}>
    <p
      className={`w-2/5 px-4 py-2 rounded-md ${
        chat.isUser ? "bg-green-200" : "bg-white"
      }`}>
      {chat.message}
    </p>
  </div>
)

export default ChatList
