import React from "react"
import { HousesState } from "../../store/houses/types"

interface Props {
  item: HousesState
}

const HousesDetailElement: React.FC<Props> = ({ item }) => {
  return <div>Test</div>
}

export default HousesDetailElement
