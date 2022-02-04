import React, { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks/hooks"
import { selectHousesStatus } from "../../store/houses/housesSlice"
import { selectCitiesStatus } from "../../store/cities/citiesSlice"
import { fetchHousesThunk } from "../../store/houses/housesThunks"
import { fetchCitiesThunk } from "../../store/cities/citiesThunks"

const Header: React.FC = () => {
  const dispatch = useAppDispatch()
  const citiesStatus = useAppSelector(selectCitiesStatus)
  const housesStatus = useAppSelector(selectHousesStatus)

  useEffect(() => {
    if (citiesStatus === "idle") {
      dispatch<void>(fetchCitiesThunk())
    }

    if (housesStatus === "idle") {
      dispatch<void>(fetchHousesThunk())
    }
  }, [])

  return <div>Header</div>
}

export default Header
