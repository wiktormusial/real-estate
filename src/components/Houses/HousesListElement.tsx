import React from "react"
import { Link } from "react-router-dom"
import HousesListThumnbail from "./HousesListThumbnail"
import { HousesState } from "../../store/houses/types"

interface Props {
  item: HousesState
}

const HousesListElement: React.FC<Props> = ({ item }) => {
  const { title, desc, photos, city } = item

  const link = `/${item.id}`

  return (
    <Link to={link}>
      <div className="container">
        <div className="grid grid-cols-3 gap-4 p-2">
          <div>
            <HousesListThumnbail photos={photos} />
          </div>
          <div className="col-span-2 relative">
            <div className="text-lg ">{title}</div>
            <div className="text-base break-all">{desc}</div>
            <div className="text-gray-500 absolute bottom-0">{city.title}</div>
          </div>
        </div>
        <hr />
      </div>
    </Link>
  )
}

export default HousesListElement
