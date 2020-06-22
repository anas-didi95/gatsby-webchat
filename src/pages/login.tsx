import React from "react"
import { FcGoogle } from "react-icons/fc"
import { GrMailOption } from "react-icons/gr"

const LoginPage: React.FC<{}> = () => {
  return (
    <div className="flex flex-col justify-center h-screen bg-gray-200">
      <div className="flex justify-center">
        <div className="w-2/5 px-8 py-6 bg-white border rounded-lg shadow">
          <p className="mb-4 text-lg font-bold">Login Form</p>
          <button className="inline-flex items-center justify-center w-full px-4 py-2 mb-4 font-bold text-gray-800 bg-gray-300 rounded hover:bg-gray-400">
            <FcGoogle />
            <span className="ml-2 text-black">Sign In with Google</span>
          </button>
          <button className="inline-flex items-center justify-center w-full px-4 py-2 mb-4 font-bold text-gray-800 bg-red-300 rounded hover:bg-red-400">
            <GrMailOption />
            <span className="ml-2 text-black">Sign In with Email</span>
          </button>
          <form>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="email">
                Email
              </label>
              <input
                className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                type="email"
                placeholder="******************"
              />
              <p className="text-xs italic text-red-500">
                Please choose a password.
              </p>
            </div>
            <div className="mt-4">
              <label
                className="block mb-2 text-sm font-bold text-gray-700"
                htmlFor="password">
                Password
              </label>
              <input
                className="w-full px-3 py-2 mb-3 leading-tight text-gray-700 border border-red-500 rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="******************"
              />
              <p className="text-xs italic text-red-500">
                Please choose a password.
              </p>
            </div>
            <div className="flex items-center justify-between mt-6">
              <a className="inline-block text-blue-500 cursor-pointer">Back</a>
              <button
                className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                type="button">
                Sign In
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
