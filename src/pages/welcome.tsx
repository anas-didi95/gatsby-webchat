import React from "react"
import FormLayout from "../layouts/FormLayout"
import Form from "../components/Form"
import FormField from "../components/FormField"
import Button from "../components/Button"
import { useForm } from "react-hook-form"
import { oc } from "ts-optchain"

type TDetailForm = {
  handleName: string
}

const WelcomePage: React.FC<{}> = () => {
  const { register, errors, handleSubmit } = useForm<TDetailForm>()

  const handler = {
    handleButtonSubmit: handleSubmit(data => {
      console.log("handleButtonSubmit", data)
    }),
  }

  return (
    <FormLayout>
      <p className="text-2xl font-bold">Welcome</p>
      <p className="mt-2 mb-8">
        To finalise the registration, please enter the information below.
      </p>
      <Form title="Detail Form">
        <FormField
          name="handle"
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
  )
}

export default WelcomePage
