import { User } from './User'
import { Company } from './Company'

interface Mapable {
  location: {
    lat: number,
    lng: number
  }
}
export class CustomMap {
  private googleMap: google.maps.Map

  constructor(id: string) {
    this.googleMap = new google.maps.Map(document.getElementById(id), {
      center: {
        lat: 0,
        lng: 0
      },
      zoom: 1
    })
  }

  addMarker(mapable: Mapable): void {
    new google.maps.Marker({
      map: this.googleMap,
      position: {
        lat: mapable.location.lat,
        lng: mapable.location.lng
      }
    })
  }

  // addCompanyrMarker(company: Company): void {
  //   new google.maps.Marker({
  //     map: this.googleMap,
  //     position: {
  //       lat: company.location.lat,
  //       lng: company.location.lng
  //     }
  //   })
  // }

}