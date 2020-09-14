export class CustomMap {
  private googleMap: google.maps.Map

  constructor() {
    this.googleMap = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: 0,
        lng: 0
      },
      zoom: 1
    })
  }

}