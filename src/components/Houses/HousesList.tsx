import React from "react"
import { useAppSelector } from "../../hooks/hooks"
import { selectAllHouses } from "../../store/houses/housesSlice"
import HousesListElement from "./HousesListElement"

const HousesList: React.FC = () => {
  const houses = useAppSelector(selectAllHouses)
  const housesList = houses.map((item) => {
    return <HousesListElement key={item.id} item={item} />
  })

  return (
    <div className="container -mt-48 grid grid-cols-1 place-items-center ">
      <div className="h-3/4 w-8/12 overflow-y-auto overflow-x-hidden bg-white p-5 drop-shadow-2xl">
        {housesList}
      </div>
    </div>
  )
}

export default HousesList
