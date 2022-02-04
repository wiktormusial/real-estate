import { createSlice } from "@reduxjs/toolkit"

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

export default citiesSlice.reducer
