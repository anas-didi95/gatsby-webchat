import React, { useState } from "react"
import * as firebase from "firebase/app"
import "firebase/auth"
import SocialLoginButton from "../components/SocialLoginButton"

firebase.initializeApp({
  apiKey: process.env.GATSBY_FIREBASE_API_KEY,
  authDomain: process.env.GATSBY_FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.GATSBY_FIREBASE_DATABASE_URL,
  projectId: process.env.GATSBY_FIREBASE_PROJECT_ID,
  storageBucket: process.env.GATSBY_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.GATSBY_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.GATSBY_FIREBASE_APP_ID,
  measurementId: process.env.GATSBY_FIREBASE_MEASUREMENT_ID,
})

const LoginPage: React.FC<{}> = () => {
  const [isEmailSignIn, setEmailSignIn] = useState(false)
  const googleProvider = new firebase.auth.GoogleAuthProvider()

  const handler = {
    handleGoogleSignIn: async () => {
      const userCredential = await firebase
        .auth()
        .signInWithPopup(googleProvider)
      console.log("userCredential:", userCredential)
    },
    handleChooseEmailSignIn: () => setEmailSignIn(prev => true),
    handleBack: () => setEmailSignIn(prev => false),
  }

  return (
    <div className="flex flex-col justify-center h-screen bg-gray-200">
      <div className="flex justify-center">
        <div className="w-2/5 px-8 py-6 bg-white border rounded-lg shadow">
          <SocialLoginButtonList
            isHide={isEmailSignIn}
            onClickGoogle={handler.handleGoogleSignIn}
            onClickEmail={handler.handleChooseEmailSignIn}
          />
          <p className="my-4 text-lg font-bold">
            {isEmailSignIn ? "Sign In" : "Sign Up"} Form
          </p>
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
            {!isEmailSignIn ? (
              <div className="flex items-center justify-end mt-4">
                <button
                  className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="button">
                  Sign Up
                </button>
              </div>
            ) : (
              <div className="flex items-center justify-between mt-4">
                <button
                  className="px-4 py-2 text-blue-500 cursor-pointer hover:bg-gray-300"
                  onClick={handler.handleBack}>
                  Back
                </button>
                <button
                  className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700 focus:outline-none focus:shadow-outline"
                  type="button">
                  Sign In
                </button>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  )
}

const SocialLoginButtonList: React.FC<{
  isHide: boolean
  onClickGoogle: any
  onClickEmail: any
}> = ({ isHide, onClickEmail, onClickGoogle }) => (
  <>
    {!isHide && (
      <>
        <SocialLoginButton type="google" onClick={onClickGoogle} />
        <SocialLoginButton type="email" onClick={onClickEmail} />
      </>
    )}
  </>
)

export default LoginPage
