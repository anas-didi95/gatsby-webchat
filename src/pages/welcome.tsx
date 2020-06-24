import React from "react"
import FormLayout from "../layouts/FormLayout"
import Form from "../components/Form"
import FormField from "../components/FormField"
import Button from "../components/Button"

const WelcomePage: React.FC<{}> = () => {
  return (
    <FormLayout>
      <p className="text-2xl font-bold">Welcome</p>
      <p className="mt-2 mb-8">
        To finalise the registration, please enter the information below.
      </p>
      <Form title="Details Form">
        <FormField name="handle" type="text" value="Handle name" error="" />
        <div className="flex justify-end mt-4">
          <Button onClick={() => {}} type="primary" value="Submit" />
        </div>
      </Form>
    </FormLayout>
  )
}

export default WelcomePage
