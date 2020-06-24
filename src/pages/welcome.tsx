import React, { useContext, useState } from "react"
import FormLayout from "../layouts/FormLayout"
import Form from "../components/Form"
import FormField from "../components/FormField"
import Button from "../components/Button"
import { useForm } from "react-hook-form"
import { oc } from "ts-optchain"
import LoaderContext from "../utils/contexts/LoaderContext"
import useAuth from "../utils/hooks/useAuth"
import useFirestore from "../utils/hooks/useFirestore"
import AuthLayout from "../layouts/AuthLayout"
import { navigate } from "gatsby"
import AuthContext from "../utils/contexts/AuthContext"

type TDetailForm = {
  handleName: string
}

const WelcomePage: React.FC<{}> = () => {
  const { register, errors, handleSubmit } = useForm<TDetailForm>()
  const { onLoading, offLoading } = useContext(LoaderContext)
  const [error, setError] = useState("")
  const { getCurrentUser } = useAuth()
  const { setUser } = useFirestore()
  const { updateAuth } = useContext(AuthContext)

  const handler = {
    handleButtonSubmit: handleSubmit(async ({ handleName }) => {
      let user = getCurrentUser()
      if (user) {
        onLoading()
        try {
          await setUser(user.uid, {
            handleName: handleName,
            uid: user.uid,
          })
          await updateAuth()
        } catch (e) {
          setError(e)
        }
        offLoading()
        navigate("/")
      }
    }),
  }

  return (
    <AuthLayout>
      <FormLayout>
        <p className="text-2xl font-bold">Welcome</p>
        <p className="mt-2 mb-8">
          To finalise the registration, please enter the information below.
        </p>
        <Form title="Detail Form">
          {error && <p className="text-sm italic text-red-500">{error}</p>}
          <FormField
            name="handleName"
            type="text"
            value="Handle name"
            error={oc(errors)
              .handleName.message("")
              .toString()}
            register={register({ required: "Handle name is mandatory field" })}
          />
          <div className="flex justify-end mt-4">
            <Button
              onClick={handler.handleButtonSubmit}
              type="primary"
              value="Submit"
            />
          </div>
        </Form>
      </FormLayout>
    </AuthLayout>
  )
}

export default WelcomePage
