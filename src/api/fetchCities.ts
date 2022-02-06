import axios from "axios"

const fetchCities = async () => {
  const response = await axios.get<[]>("http://localhost:8000/api/v1/city/")
  return response.data
}

export default fetchCities
