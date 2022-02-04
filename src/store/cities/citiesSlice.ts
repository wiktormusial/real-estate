import { createSlice } from "@reduxjs/toolkit"
import type { RootState } from "../store"

export interface CitiesState {
  id: number
  title: string
  zip_code: number
}

const initialState = {
  status: "idle",
  cities: <CitiesState | []>[],
}

export const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {},
})

export const selectAllHouses = (state: RootState) => state.cities.cities
export const selectHousesStatus = (state: RootState) => state.cities.status
export default citiesSlice.reducer
