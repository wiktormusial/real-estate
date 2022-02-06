import React from "react"
import { useAppSelector, useAppDispatch } from "../../hooks/hooks"
import { selectAllCities, selectCity } from "../../store/cities/citiesSlice"

const CitiesList: React.FC = () => {
  const cities = useAppSelector(selectAllCities)
  const dispatch = useAppDispatch()

  const citiesList = cities.map((item) => {
    return (
      <option key={item.id} value={item.title}>
        {item.title}
      </option>
    )
  })

  return (
    <div className="text-center">
      <select
        name="cities"
        className="text-center text-xl bg-zinc-100 border border-slate-300 p-2"
        onChange={(e) => dispatch(selectCity(e.target.value))}
      >
        <option value="All">All</option>
        {citiesList}
      </select>
    </div>
  )
}

export default CitiesList
