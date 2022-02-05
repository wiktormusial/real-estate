import React, { useState } from "react"

interface Photos {
  photos: [
    {
      id: number
      title: string
      house: number
      main_photo: boolean
      image: string
    }
  ]
}

const Gallery: React.FC<Photos> = ({ photos }) => {
  const mainPhoto = photos.find((item) => item.main_photo === true)
  const [photo, setPhoto] = useState(mainPhoto.image)

  const photos_list = photos.map((item) => {
    return (
      <li key={item.id} className="mx-2" onClick={() => setPhoto(item.image)}>
        <img src={item.image} />
      </li>
    )
  })

  return (
    <div className="container h-96 w-96 flex flex-col">
      <div className="mb-6">
        <img src={photo} />
      </div>
      <ul className="inline flex flex-row">{photos_list}</ul>
    </div>
  )
}

export default Gallery
