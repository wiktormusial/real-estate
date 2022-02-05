import React from "react"
import Gallery from "../Gallery/Gallery"
import Map from "../Map/Map"

import { HousesState } from "../../store/houses/types"

interface Props {
  item: HousesState
}

const HousesDetailElement: React.FC<Props> = ({ item }) => {
  const { title, desc, photos } = item

  return (
    <div className="flex flex-col md:flex-row text-justify">
      <div className="w-auto md:w-3/4 shadow-xl md:mr-5 p-5">
        <div className="text-xl underline mb-5">{title}</div>
        <div className="md:mr-5 mb-5">{desc}</div>
        <hr />
        <div className="md:mr-5 mb-5 h-96">
          <Map />
        </div>
      </div>
      <div className="w-auto h-3/4 max-h-full shadow-xl md:w-2/4">
        <Gallery photos={photos} />
      </div>
    </div>
  )
}

export default HousesDetailElement
