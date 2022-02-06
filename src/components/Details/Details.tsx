import React from "react"
import { selectHouseById } from "../../store/houses/housesSlice"
import { useAppSelector } from "../../hooks/hooks"

interface Props {
  id: number
}

const Details: React.FC<Props> = ({ id }) => {
  const obj = useAppSelector((state) => selectHouseById(state, id))
  const { balcony, bathrooms, beds, kitchen, qm, rooms } = obj.details
  console.log(obj)
  return (
    <div className="max-h-max p-5 mt-5 bg-white">
      <div className="text-lg underline mb-5">Details</div>
      <div className="grid grid-cols-2 ">
        <div>
          <div>
            <div className="font-semibold underline decoration-1">Balcony</div>
            {balcony ? "Yes" : "No"}
          </div>
          <div>
            <div className="font-semibold underline decoration-1">
              Bathrooms
            </div>
            <div>{bathrooms}</div>
          </div>
          <div>
            <div className="font-semibold underline decoration-1">Beds</div>
            <div>{beds}</div>
          </div>
        </div>
        <div>
          <div>
            <div className="font-semibold underline decoration-1">Kitchen</div>
            <div>{kitchen ? "Yes" : "No"}</div>
          </div>
          <div>
            <div className="font-semibold underline decoration-1">Qm</div>
            <div>{qm}</div>
          </div>
          <div>
            <div className="font-semibold underline decoration-1">Rooms</div>
            <div>{rooms}</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Details
