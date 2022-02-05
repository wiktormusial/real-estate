import React from "react"
import { useParams } from "react-router-dom"
import {
  selectHousesStatus,
  selectHouseById,
} from "../../store/houses/housesSlice"
import { useAppSelector } from "../../hooks/hooks"
import HousesDetailElement from "./HousesDetailElement"

const HousesDetail: React.FC = () => {
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

  return <div>{house}</div>
}

export default HousesDetail
