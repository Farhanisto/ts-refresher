import faker from 'faker'
import { Mapable } from './CustomMap'

export class Company implements Mapable {
  name: string
  slogan: string
  location: {
    lat: number,
    lng: number
  }

  constructor() {
    this.name = faker.company.companyName()
    this.slogan = faker.company.catchPhrase()
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude())
    }
  }
}