import React from "react"

const MessageField: React.FC<{
  onClickSend: {
    (e: React.FormEvent<HTMLButtonElement | HTMLFormElement>): void
  }
  setMessage: Function
  message: string
}> = ({ onClickSend, setMessage, message }) => (
  <form onSubmit={onClickSend}>
    <div className="flex">
      <input
        type="text"
        className="px-3 py-2 mr-2 leading-tight text-gray-700 border rounded shadow appearance-none md:w-11/12 sm:w-10/12 focus:outline-none focus:shadow-outline"
        id="username"
        placeholder="Enter message"
        onChange={e => setMessage(e.target.value)}
        value={message}
      />
      <button
        className="px-4 py-2 font-bold text-white bg-blue-500 rounded md:w-1/12 sm:w-2/12 hover:bg-blue-700"
        type="submit"
        onClick={onClickSend}>
        Send
      </button>
    </div>
  </form>
)

export default MessageField
