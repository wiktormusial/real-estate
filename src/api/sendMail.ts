import axios from "axios"
import getCookie from "../utils/getCookie/getCookie"

export interface Values {
  houseId: number
  sender: string
  body: string
  subject: string
}

const sendMail = async (values: Values) => {
  const headers = {
    "X-CSRFToken": getCookie("csrftoken"),
  }

  const payload = {
    house_id: values.houseId,
    author: values.sender,
    subject: values.subject,
    body: values.body,
  }

  const response = await axios.post<[]>(
    "http://localhost:8000/api/v1/send-mail/",
    payload,
    { headers: headers }
  )

  return response.data
}

export default sendMail
