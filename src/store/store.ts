import { configureStore } from "@reduxjs/toolkit"
import housesReducer from "./houses/housesSlice"

export const store = configureStore({
  reducer: {
    houses: housesReducer,
  },
})

export type AppDispatch = typeof store.dispatch
export type RootState = ReturnType<typeof store.getState>
