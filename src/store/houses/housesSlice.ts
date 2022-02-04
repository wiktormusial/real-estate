import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchHousesThunk } from "./housesThunks"
import type { RootState } from "../store"

export interface HousesState {
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
  extraReducers: (builder) => {
    builder.addCase(
      fetchHousesThunk.fulfilled,
      (state, action: PayloadAction<HousesState>) => {
        state.status = "succedded"
        state.houses = action.payload
      }
    )
  },
})

export const selectAllHouses = (state: RootState) => state.houses.houses
export const selectHousesStatus = (state: RootState) => state.houses.status
export default housesSlice.reducer
