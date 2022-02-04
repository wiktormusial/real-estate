import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../store"
import { fetchCitiesThunk } from "./citiesThunks"

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
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchCitiesThunk.fulfilled,
        (state, action: PayloadAction<CitiesState>) => {
          state.status = "succedded"
          state.cities = action.payload
        }
      )
      .addCase(fetchCitiesThunk.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchCitiesThunk.rejected, (state) => {
        state.status = "failed"
      })
  },
})

export const selectAllHouses = (state: RootState) => state.cities.cities
export const selectHousesStatus = (state: RootState) => state.cities.status
export default citiesSlice.reducer
