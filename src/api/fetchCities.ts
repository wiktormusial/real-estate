import axios from "axios"
import { CitiesState } from "../store/cities/citiesSlice"

const fetchCities = async () => {
  const response = await axios.get<CitiesState>(
    "http://localhost:8000/api/v1/city/"
  )
  return response.data
}

export default fetchCities
