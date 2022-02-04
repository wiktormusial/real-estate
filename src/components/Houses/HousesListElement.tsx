import React from "react"
import { HousesState } from "../../store/houses/types"

interface Props {
  item: HousesState
}

const HousesListElement: React.FC<Props> = ({ item }) => {
  const { title, desc, photos, qm } = item

  const main_photo = photos.filter((photo) => photo.main_photo === true)[0]

  return (
    <div>
      <div>{title}</div>
      <div>{desc}</div>
      <div>{qm}</div>
      <div>{main_photo.image}</div>
    </div>
  )
}

export default HousesListElement
