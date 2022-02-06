import React from "react"

interface Props {
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

const HousesListThumnbail: React.FC<Props> = ({ photos }) => {
  const main_photo = photos.filter((photo) => photo.main_photo === true)[0]

  if (main_photo) {
    return <img src={main_photo.image} />
  } else {
    if (photos.length <= 0) {
      return (
        <img src="https://foerdeblueten.de/wp-content/uploads/2020/03/no-image-1.jpg" />
      )
    } else {
      const photo = photos[0].image
      return <img src={photo} />
    }
  }
}

export default HousesListThumnbail
