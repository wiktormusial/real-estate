import React, { useEffect } from "react"
import { Link } from "react-router-dom"
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
    <div className="sticky top-0 z-10">
      <div className="bg-appbar-blue">
        <Link to="/">
          <div className="text-[50px] text-white pl-5">Musial houses</div>
        </Link>
      </div>
    </div>
  )
}

export default Header
