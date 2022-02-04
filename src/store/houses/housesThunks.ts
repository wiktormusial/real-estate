import { createAsyncThunk } from "@reduxjs/toolkit"
import fetchHouses from "../../api/fetchHouses"

export const fetchHousesThunk = createAsyncThunk(
  "houses/fetchHouses",
  fetchHouses
)
