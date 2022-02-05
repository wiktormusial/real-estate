import React from "react"
import { HousesState } from "../../store/houses/types"

interface Props {
  item: HousesState
}

const HousesDetailElement: React.FC<Props> = ({ item }) => {
  const { title, desc, city, photos } = item

  // todo -> create separate components for photos list
  const photoslist = photos.map((item) => {
    return <div>{item.image}</div>
  })

  return (
    <div>
      <div>{title}</div>
      <div>{desc}</div>
      <div>{city.title}</div>
      <div>{photoslist}</div>
    </div>
  )
}

export default HousesDetailElement
