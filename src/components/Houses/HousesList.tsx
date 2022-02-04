import React from "react"
import { useAppSelector } from "../../hooks/hooks"
import { selectAllHouses } from "../../store/houses/housesSlice"
import HousesListElement from "./HousesListElement"

const HousesList: React.FC = () => {
  const houses = useAppSelector(selectAllHouses)
  const housesList = houses.map((item) => {
    return <HousesListElement key={item.id} item={item} />
  })

  return <div>{housesList}</div>
}

export default HousesList
