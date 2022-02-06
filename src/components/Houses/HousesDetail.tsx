import React from "react"
import { useParams } from "react-router-dom"
import {
  selectHousesStatus,
  selectHouseById,
} from "../../store/houses/housesSlice"
import { useAppSelector } from "../../hooks/hooks"
import HousesDetailElement from "./HousesDetailElement"

const HousesDetail: React.FC = () => {
  window.scrollTo(0, 0)

  const { houseId } = useParams()
  const status = useAppSelector(selectHousesStatus)
  const obj = useAppSelector((state) =>
    selectHouseById(state, parseInt(houseId))
  )

  let house: string | JSX.Element

  if (status === "succedded") {
    house = <HousesDetailElement item={obj} />
  } else {
    house = "Loading"
  }

  return (
    <div className="bg-white md:w-auto p-5">
      <div className="mb-5">{house}</div>
      <hr />
    </div>
  )
}

export default HousesDetail
