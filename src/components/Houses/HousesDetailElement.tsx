import React from "react"
import Gallery from "../Gallery/Gallery"
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
        <div className="text-xl mt-5 underline">Localization</div>
        <div className="md:mr-5 mb-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nec
          lacus ornare, egestas ipsum quis, varius magna. Fusce eu augue
          pharetra est sollicitudin porttitor. Curabitur eget urna tortor. Cras
          ac vulputate metus. Proin ut nisi nec odio ornare eleifend nec at
          augue. Nulla ut justo in ex auctor facilisis. Fusce aliquam, risus
          finibus molestie posuere, nunc odio imperdiet mi, fringilla lacinia
          magna odio non quam. Quisque ligula orci, egestas eget mauris in,
          euismod tempor dui. Donec lacinia tincidunt quam quis varius. Duis vel
          blandit velit, non ornare ante. Donec auctor posuere mollis.
        </div>
      </div>
      <div className="w-auto h-3/4 max-h-full shadow-xl md:w-2/4">
        <Gallery photos={photos} />
      </div>
    </div>
  )
}

export default HousesDetailElement
