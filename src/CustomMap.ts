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

}