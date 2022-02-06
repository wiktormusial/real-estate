import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from "../store"
import { fetchCitiesThunk } from "./citiesThunks"

export interface CitiesState {
  id: number
  title: string
  zip_code: number
}

export interface State {
  status: "idle" | "failed" | "loading" | "succedded"
  selectedCity: string
  cities: CitiesState[]
}

const initialState: State = {
  status: "idle",
  selectedCity: "All",
  cities: [],
}

export const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    selectCity(state, action: PayloadAction<string>) {
      state.selectedCity = action.payload
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchCitiesThunk.fulfilled,
        (state, action: PayloadAction<[]>) => {
          state.status = "succedded"
          state.cities = state.cities.concat(action.payload)
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

export const selectAllCities = (state: RootState) => state.cities.cities
export const selectCitiesStatus = (state: RootState) => state.cities.status
export const selectSelectedCity = (state: RootState) =>
  state.cities.selectedCity

export const { selectCity } = citiesSlice.actions
export default citiesSlice.reducer
