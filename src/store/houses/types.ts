export interface HousesState {
  id: number
  title: string
  desc: string
  qm: number
  city: [
    {
      id: number
      title: string
      zip_code: number
    }
  ]
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
