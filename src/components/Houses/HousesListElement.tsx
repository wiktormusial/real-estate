import React from "react"
import { HousesState } from "../../store/houses/types"

interface Props {
  item: HousesState
}

const HousesListElement: React.FC<Props> = ({ item }) => {
  const { title, desc, photos, city } = item

  const main_photo = photos.filter((photo) => photo.main_photo === true)[0]

  return (
    <div className="container">
      <div className="grid grid-cols-3 gap-4 p-2">
        <div>
          <img src={main_photo.image} />
        </div>
        <div className="col-span-2 relative">
          <div className="text-lg ">{title}</div>
          <div className="text-base break-all">{desc}</div>
          <div className="text-gray-500 absolute bottom-0">{city.title}</div>
        </div>
      </div>
      <hr />
    </div>
  )
}

export default HousesListElement
