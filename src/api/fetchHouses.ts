import axios from "axios"
import { HousesState } from "../store/houses/housesSlice"

const fetchHouses = async () => {
  const response = await axios.get<HousesState>(
    "http://localhost:8000/api/v1/data/"
  )
  return response.data
}

export default fetchHouses
