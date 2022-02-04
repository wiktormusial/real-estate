import axios from "axios"

const fetchHouses = async () => {
  const response = await axios.get<[]>("http://localhost:8000/api/v1/data/")
  return response.data
}

export default fetchHouses
