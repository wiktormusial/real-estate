import React from "react"
import GoogleMapReact from "google-map-react"

const Map = () => {
  const data = {
    center: {
      lat: 50.224759,
      lng: 19.21282,
    },
    zoom: 15,
  }

  return (
    <div className="h-80">
      <div className="text-xl underline mb-5 mt-5">Localization</div>
      <GoogleMapReact
        bootstrapURLKeys={{ key: `${process.env.GOOGLE_MAPS_API_KEY}` }}
        defaultCenter={data.center}
        defaultZoom={data.zoom}
      ></GoogleMapReact>
    </div>
  )
}

export default Map
