import React, { useState } from "react"
import { Formik, Form, Field } from "formik"
import sendMail, { Values } from "../../api/sendMail"
import ContactFormSuccess from "./ContactFormSuccess"
import ContactFormValidationSchema from "./ContactFormValidationSchema"

interface Props {
  id: number
}

const FormHeader = () => {
  return <div className="text-xl underline mb-5 mt-5">Contact</div>
}

const ContactFormHouse: React.FC<Props> = ({ id }) => {
  const [status, setStatus] = useState("idle")

  const initialValues: Values = {
    houseId: id,
    body: "",
    subject: "",
    sender: "",
  }

  const handleSumbit = (values: Values) => {
    setStatus("loading")
    sendMail(values)
      .then(() => setStatus("succedded"))
      .catch((err) => console.log(err))
  }

  if (status === "idle") {
    return (
      <div>
        <FormHeader />
        <Formik
          initialValues={initialValues}
          onSubmit={(values) => handleSumbit(values)}
          validationSchema={ContactFormValidationSchema}
        >
          {({ errors, touched }) => (
            <Form>
              <Field
                name="sender"
                className="p-2 border border-solid border-color-black bg-slate-100 mb-5"
                placeholder="Your email address"
              />
              {errors.sender && touched.sender && (
                <div className="form-text">{errors.sender}</div>
              )}
              <br />
              <Field
                name="subject"
                className="p-2 border border-solid border-color-black bg-slate-100 mb-5"
                placeholder="Subject"
              />
              {errors.subject && touched.subject && (
                <div className="form-text">{errors.subject}</div>
              )}
              <Field
                as="textarea"
                name="body"
                className="w-full h-40 p-2 border border-solid border-color-black bg-slate-100 mb-5"
                placeholder="Your message"
              />
              {errors.body && touched.body && (
                <div className="form-text">{errors.body}</div>
              )}
              <div className="grid grid-cols-4">
                <div className="col-span-3"></div>
                <button className="bg-green-500 hover:bg-green-700 text-white font-bold w-full py-2 px-4 rounded">
                  Send
                </button>
              </div>
              <br />
            </Form>
          )}
        </Formik>
      </div>
    )
  } else if (status === "succedded") {
    return (
      <div>
        <FormHeader />
        <ContactFormSuccess />
      </div>
    )
  } else if (status === "loading") {
    return (
      <div>
        <FormHeader />
        Loading
      </div>
    )
  }
}

export default ContactFormHouse
