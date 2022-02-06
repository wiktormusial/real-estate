import * as Yup from "yup"

const ContactFormValidationSchema = Yup.object().shape({
  sender: Yup.string()
    .email("Must be a valid email")
    .max(255, "Too Long!")
    .required("Required"),
  subject: Yup.string()
    .min(3, "Too Short!")
    .max(255, "Too Long!")
    .required("Required"),
  body: Yup.string().min(3, "Too Short!").required("Required"),
})

export default ContactFormValidationSchema
