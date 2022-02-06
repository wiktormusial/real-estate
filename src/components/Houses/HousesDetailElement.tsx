import React from "react"
import Gallery from "../Gallery/Gallery"
import Map from "../Map/Map"
import ContactFormHouse from "../Contact/ContactFormHouse"

import { HousesState } from "../../store/houses/types"
import Details from "../Details/Details"

interface Props {
  item: HousesState
}

const HousesDetailElement: React.FC<Props> = ({ item }) => {
  const { title, desc, photos, id } = item

  return (
    <div className="flex flex-col md:flex-row text-justify">
      <div className="w-auto md:w-3/4 shadow-xl md:mr-5 p-5">
        <div className="text-xl underline mb-5">{title}</div>
        <div className="md:mr-5 mb-5">{desc}</div>
        <hr />
        <Map />
        <hr />
        <div className="md:mr-5 mb-5 h-96">
          <ContactFormHouse id={id} />
        </div>
      </div>
      <div className="h-3/4 max-h-full md:w-2/4">
        <div className="shadow-xl w-auto">
          <Gallery photos={photos} />
        </div>
        <div className="h-3/4 max-h-full">
          <div className="shadow-xl w-auto">
            <Details id={id} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default HousesDetailElement
