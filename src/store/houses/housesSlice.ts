import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchHousesThunk } from "./housesThunks"
import type { RootState } from "../store"

import { HousesState } from "./types"

export interface State {
  status: "idle" | "failed" | "loading" | "succedded"
  houses: HousesState[]
}

const initialState: State = {
  status: "idle",
  houses: [],
}

export const housesSlice = createSlice({
  name: "houses",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(
        fetchHousesThunk.fulfilled,
        (state, action: PayloadAction<[]>) => {
          state.status = "succedded"
          state.houses = state.houses.concat(action.payload)
        }
      )
      .addCase(fetchHousesThunk.pending, (state) => {
        state.status = "loading"
      })
      .addCase(fetchHousesThunk.rejected, (state) => {
        state.status = "failed"
      })
  },
})

export const selectAllHouses = (state: RootState) => state.houses.houses
export const selectHouseById = (state: RootState, id: number) =>
  state.houses.houses.find((item) => item.id === id)

export const selectHousesStatus = (state: RootState) => state.houses.status
export default housesSlice.reducer
