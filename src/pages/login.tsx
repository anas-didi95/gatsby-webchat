import React, { useState } from "react"
import SocialLoginButton from "../components/SocialLoginButton"
import Form from "../components/Form"
import FormField from "../components/FormField"
import Button from "../components/Button"
import { useForm } from "react-hook-form"
import { oc } from "ts-optchain"
import useAuth from "../utils/hooks/useAuth"

type TPageForm = {
  email: string
  password: string
}

const LoginPage: React.FC<{}> = () => {
  const [isEmailSignIn, setEmailSignIn] = useState(false)
  const { singInWithGoogle, signUpwithEmailandPassword } = useAuth()

  const handler = {
    handleGoogleSignIn: async () => {
      const userCredential = await singInWithGoogle()
      console.log("userCredential:", userCredential)
    },
    handleChooseEmailSignIn: () => setEmailSignIn(prev => true),
    handleBack: () => setEmailSignIn(prev => false),
    handleSignUp: async ({ email, password }: TPageForm) => {
      const userCredential = await signUpwithEmailandPassword(email, password)
      console.log("userCredential:", userCredential)
    },
    handleSignIn: (data: TPageForm) => {
      console.log("handleSignIn:", data)
    },
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
            onClickSignUp={handler.handleSignUp}
            onClickSignIn={handler.handleSignIn}
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

const PageForm: React.FC<{
  isEmailSignIn: boolean
  onClickBack: any
  onClickSignUp: any
  onClickSignIn: any
}> = ({ isEmailSignIn, onClickBack, onClickSignUp, onClickSignIn }) => {
  const { register, handleSubmit, errors } = useForm<TPageForm>()

  const handler = {
    handleSignUp: handleSubmit(onClickSignUp),
    handleSignIn: handleSubmit(onClickSignIn),
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
            onClick={handler.handleSignUp}
          />
        </div>
      ) : (
        <div className="flex items-center justify-between mt-4">
          <Button type="link" value="Back" onClick={onClickBack} />
          <Button
            type="primary"
            value="Sign In"
            onClick={handler.handleSignIn}
          />
        </div>
      )}
    </Form>
  )
}

export default LoginPage
