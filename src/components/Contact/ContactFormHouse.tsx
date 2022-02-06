import React, { useState } from "react"
import { Formik, Form, Field } from "formik"

interface Props {
  id: number
}

interface FormValues {
  houseId: number
  body: string
  subject: string
  sender: string
}

const FormHeader = () => {
  return <div className="text-xl underline mb-5 mt-5">Contact</div>
}

const ContactFormHouse: React.FC<Props> = ({ id }) => {
  const [status, setStatus] = useState("idle")

  const initialValues: FormValues = {
    houseId: id,
    body: "",
    subject: "",
    sender: "",
  }

  const handleSumbit = (values: FormValues) => {
    setStatus("succedded")
  }

  if (status === "idle") {
    return (
      <div>
        <FormHeader />
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => handleSumbit(values)}
        >
          <Form>
            <Field
              name="sender"
              className="p-2 border border-solid border-color-black bg-slate-100 mb-5"
              placeholder="Your email address"
            />
            <br />
            <Field
              name="subject"
              className="p-2 border border-solid border-color-black bg-slate-100 mb-5"
              placeholder="Subject"
            />
            <Field
              as="textarea"
              name="body"
              className="w-full h-40 p-2 border border-solid border-color-black bg-slate-100 mb-5"
              placeholder="Your message"
            />
            <div className="grid grid-cols-4">
              <div className="col-span-3"></div>
              <button className="bg-green-500 hover:bg-green-700 text-white font-bold w-full py-2 px-4 rounded">
                Send
              </button>
            </div>
            <br />
          </Form>
        </Formik>
      </div>
    )
  } else if (status === "succedded") {
    return (
      <div>
        <FormHeader />
        Test
      </div>
    )
  }
}

export default ContactFormHouse
