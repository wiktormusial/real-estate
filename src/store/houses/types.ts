export interface HousesState {
  id: number
  title: string
  desc: string
  details: {
    rooms: number
    qm: number
    beds: number
    balcony: boolean
    bathrooms: string
    kitchen: boolean
  }
  city: {
    id: number
    title: string
    zip_code: number
  }
  address: string
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
