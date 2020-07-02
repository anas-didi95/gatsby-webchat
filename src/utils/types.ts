export type User = {
  handleName: string
  uid: string
}

export type Chat = {
  message: string
  isUser: boolean
}

export type Channel = {
  channelName: string
  uid?: string
  createDate?: Date
  createBy?: string
}

export type Message = {
  value: string
  createDate?: Date | any
  createBy?: string
}
