import React from "react"
import { useAppSelector } from "../../hooks/hooks"
import { selectAllHouses } from "../../store/houses/housesSlice"
import { selectSelectedCity } from "../../store/cities/citiesSlice"
import HousesListElement from "./HousesListElement"
import CitiesList from "../Cities/CitiesList"

const HousesList: React.FC = () => {
  const selectedCity = useAppSelector(selectSelectedCity)
  const houses = useAppSelector(selectAllHouses)

  let housesList: JSX.Element[] | string

  if (houses.length !== 0) {
    if (selectedCity === "All") {
      housesList = houses.map((item) => {
        return <HousesListElement key={item.id} item={item} />
      })
    } else {
      housesList = houses
        .filter((item) => item.city.title === selectedCity)
        .map((item) => {
          return <HousesListElement key={item.id} item={item} />
        })
    }
  } else {
    housesList = "You have to add some houses"
  }

  return (
    <div className="grid grid-cols-1 md:p-5">
      <div className="bg-white p-5 drop-shadow-2xl">
        <CitiesList />
        <hr className="mb-5 mt-5" />
        {housesList}
      </div>
    </div>
  )
}

export default HousesList
