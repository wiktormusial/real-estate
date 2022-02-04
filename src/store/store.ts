import { configureStore } from "@reduxjs/toolkit"
import housesReducer from "./houses/housesSlice"
import citiesReducer from "./cities/citiesSlice"

export const store = configureStore({
  reducer: {
    houses: housesReducer,
    cities: citiesReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
