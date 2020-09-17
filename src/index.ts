import { User } from './User'
import { Company } from './Company'
import { CustomMap } from './CustomMap'

console.log('hi farhan')
console.log(new User())
console.log(new Company())
let userMarker = new CustomMap('map')
userMarker.addMarker(new User())
userMarker.addMarker(new Company())


