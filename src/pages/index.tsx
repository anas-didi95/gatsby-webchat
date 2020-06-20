import React from "react"
import Header from "../components/Header"

const IndexPage: React.FC<{}> = () => (
  <div className="">
    <Header />
    <div className="flex max-h-full">
      <div className="w-3/12 h-full h-screen max-h-screen overflow-scroll">
        <div className="px-8 py-4 cursor-pointer hover:bg-gray-300">
          <p className="text-lg font-semibold">Hello world</p>
        </div>
        <hr />
      </div>
    </div>
  </div>
)

export default IndexPage
