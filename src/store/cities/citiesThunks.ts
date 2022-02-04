import { createAsyncThunk } from "@reduxjs/toolkit"
import fetchCities from "../../api/fetchCities"

export const fetchCitiesThunk = createAsyncThunk(
  "cities/fetchCities",
  fetchCities
)
