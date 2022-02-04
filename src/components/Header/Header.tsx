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

  return (
    <div className="container">
      <div className="bg-indigo-400 h-60 shadow-xl">
        <div className="text-white text-center pt-10">
          <div className="text-5xl ">Musial houses</div>
          <div className="text-2xl">Place with best short-term apartaments</div>
        </div>
      </div>
    </div>
  )
}

export default Header
