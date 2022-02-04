import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "../store"

interface HousesState {
  id: number
  title: string
  desc: string
  city: [
    {
      id: number
      title: string
      zip_code: number
    }
  ]
  address: string
  photos: [
    {
      id: number
      title: string
      house: number
      main_photo: boolean
      image: string
    }
  ]
}

const initialState = {
  status: "idle",
  houses: <HousesState | []>[],
}

export const housesSlice = createSlice({
  name: "houses",
  initialState,
  reducers: {},
})

export default housesSlice.reducer
export const selectAllHouses = (state: RootState) => state.houses.houses
