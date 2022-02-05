import React from "react"
import Gallery from "../Gallery/Gallery"
import { HousesState } from "../../store/houses/types"

interface Props {
  item: HousesState
}

const HousesDetailElement: React.FC<Props> = ({ item }) => {
  const { title, desc, city, photos } = item

  return (
    <div>
      <div>{title}</div>
      <div>{desc}</div>
      <div>{city.title}</div>
      <Gallery photos={photos} />
    </div>
  )
}

export default HousesDetailElement
