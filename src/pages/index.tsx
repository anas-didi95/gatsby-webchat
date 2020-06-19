import React from "react"
import FormField from "../components/FormField"
import Button from "../components/Button"
import Form from "../components/Form"
import AppLayout from "../layouts/AppLayout"

const IndexPage: React.FC<{}> = () => (
  <AppLayout>
    <div className="w-full max-w-sm">
      <Form>
        <FormField label="Email" name="email" type="text" />
        <FormField label="Password" name="password" type="password" />
        <div className="flex items-center justify-end">
          <Button value="Sign In" />
        </div>
      </Form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Acme Corp. All rights reserved.
      </p>
    </div>
  </AppLayout>
)

export default IndexPage
