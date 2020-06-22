import React, { useState } from "react"
import * as firebase from "firebase/app"
import "firebase/auth"
import SocialLoginButton from "../components/SocialLoginButton"
import Form from "../components/Form"
import FormField from "../components/FormField"
import Button from "../components/Button"
import { useForm } from "react-hook-form"
import { oc } from "ts-optchain"
import { string } from "prop-types"

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
          <PageForm
            isEmailSignIn={isEmailSignIn}
            onClickBack={handler.handleBack}
          />
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

const PageForm: React.FC<{ isEmailSignIn: boolean; onClickBack: any }> = ({
  isEmailSignIn,
  onClickBack,
}) => {
  type TForm = {
    email: string
    password: string
  }
  const { register, handleSubmit, errors } = useForm<TForm>()

  const handler = {
    handleSignUp: (data: TForm) => {
      console.log("handleSignUp:", data)
    },
  }

  return (
    <Form title={`${isEmailSignIn ? "Sign In" : "Sign Up"} Form`}>
      <FormField
        name="email"
        type="email"
        value="Email"
        register={register({ required: "Email is mandatory field" })}
        error={oc(errors)
          .email.message("")
          .toString()}
      />
      <FormField
        name="password"
        type="password"
        value="Password"
        register={register({ required: "Password is mandatory field" })}
        error={oc(errors)
          .password.message("")
          .toString()}
      />
      {!isEmailSignIn ? (
        <div className="flex items-center justify-end mt-4">
          <Button
            type="primary"
            value="Sign Up"
            onClick={handleSubmit(handler.handleSignUp)}
          />
        </div>
      ) : (
        <div className="flex items-center justify-between mt-4">
          <Button type="link" value="Back" onClick={onClickBack} />
          <Button type="primary" value="Sign In" onClick={() => {}} />
        </div>
      )}
    </Form>
  )
}

export default LoginPage
