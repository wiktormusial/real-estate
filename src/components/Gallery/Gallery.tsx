import React, { useState, useEffect } from "react"

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
  const [photo, setPhoto] = useState("")

  if (mainPhoto) {
    useEffect(() => {
      setPhoto(mainPhoto.image)
    }, [])

    const photos_list = photos.map((item) => {
      return (
        <div
          className="h-26"
          onClick={() => setPhoto(item.image)}
          key={item.id}
        >
          <img className="h-full object-cover" src={item.image} />
        </div>
      )
    })

    return (
      <div className="max-h-max p-5">
        <div className="grid grid-cols-1 mb-5">
          <img src={photo} />
        </div>
        <div className="grid grid-cols-4 gap-3">{photos_list}</div>
      </div>
    )
  } else {
    if (photos.length <= 0) {
      return <div></div>
    } else {
      return (
        <div className="max-h-max p-5">
          <div className="grid grid-cols-1 mb-5">
            <img src={photos[0].image} />
          </div>
        </div>
      )
    }
  }
}

export default Gallery
