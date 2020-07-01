import React, { useContext, useEffect, useState } from "react"
import Header from "../components/Header"
import * as Types from "../utils/types"
import MessageField from "../components/MessageField"
import ChatList from "../components/ChatList"
import AppLayout from "../layouts/AppLayout"
import AuthLayout from "../layouts/AuthLayout"
import { navigate } from "gatsby"
import useAuth from "../utils/hooks/useAuth"
import LoaderContext from "../utils/contexts/LoaderContext"
import FormField from "../components/FormField"
import Button from "../components/Button"
import { useForm } from "react-hook-form"
import { oc } from "ts-optchain"
import useFirestore from "../utils/hooks/useFirestore"

type TAddChannelForm = {
  channelName: string
}

const IndexPage: React.FC<{}> = () => {
  const { signOut } = useAuth()
  const { onLoading, offLoading } = useContext(LoaderContext)
  const [channel, setChannel] = useState<Types.Channel>({
    uid: "",
    channelName: "",
  })

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
    resetChannel: () => setChannel({ channelName: "", uid: "" }),
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
    <AuthLayout userLoaded={true}>
      <AppLayout>
        <div className="flex h-screen">
          <div className="w-3/12 h-full overflow-scroll">
            <ChannelList
              setChannel={setChannel}
              resetChannel={handler.resetChannel}
            />
          </div>
          <div className="w-9/12 h-full">
            <div>
              <Header
                handleLogOut={handler.handleLogOut}
                channelName={channel.channelName}
              />
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

const ChannelList: React.FC<{
  setChannel: Function
  resetChannel: Function
}> = ({ setChannel, resetChannel }) => {
  const [isAddChannel, setAddChannel] = useState(false)
  const { register, handleSubmit, errors } = useForm<TAddChannelForm>()
  const firestore = useFirestore()
  const [channelList, setChannelList] = useState<Types.Channel[]>([])
  const [channelIdx, setChannelIdx] = useState<number>(-1)

  useEffect(() => {
    const subscriberChannelList = firestore.listenChannelList(
      (result: Types.Channel[]) => {
        setChannelList(result)
        setChannelIdx(-1)
        resetChannel()
      }
    )

    return () => {
      subscriberChannelList()
    }
  }, [])

  const handler = {
    handleToggleChannel: () => setAddChannel(prev => !prev),
    handleSubmitChannel: handleSubmit(async ({ channelName }) => {
      try {
        await firestore.addChannel(channelName)
      } catch (e) {
        alert(e.message)
      }
      setAddChannel(prev => !prev)
    }),
    handleClickChannel: (i: number) => {
      setChannelIdx(i)
      setChannel(channelList[i])
    },
  }

  return (
    <>
      <div
        className={`px-8 py-6 border border-b-4 ${
          !isAddChannel ? "hover:bg-gray-300 cursor-pointer" : ""
        }`}
        onClick={!isAddChannel ? handler.handleToggleChannel : undefined}>
        {!isAddChannel ? (
          <p className="text-lg font-semibold appearance-none">
            <span className="mr-2">+</span>Add channel
          </p>
        ) : (
          <div>
            <FormField
              name="channelName"
              type="text"
              value="Channel name"
              register={register({
                required: "Channel name is mandatory field",
              })}
              error={oc(errors)
                .channelName.message("")
                .toString()}
            />
            <div className="flex justify-end mt-4">
              <Button
                onClick={handler.handleToggleChannel}
                type="link"
                value="Cancel"
              />
              <Button
                onClick={handler.handleSubmitChannel}
                type="primary"
                value="Submit"
              />
            </div>
          </div>
        )}
      </div>
      {channelList &&
        channelList.map((channel, i) => (
          <div
            key={`channel${i}`}
            className={`px-8 py-6 border border-b-4 cursor-pointer hover:bg-gray-300 ${
              i == channelIdx ? "bg-gray-300" : ""
            }`}
            onClick={() => handler.handleClickChannel(i)}>
            <p className="font-semibold appearance-none">
              #{channel.channelName}
            </p>
          </div>
        ))}
    </>
  )
}

export default IndexPage
