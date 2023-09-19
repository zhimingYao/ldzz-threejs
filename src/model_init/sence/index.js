/* 场景匹配 */
import restaurant_sence from './restaurant_sence'
import elephant_shed_sence from './dreams_birds_sence'

export function getSence() {
  let sence_data = null
  switch (this.config.sence) {
    case 'restaurant_sence':
      console.log(restaurant_sence.name)
      sence_data = restaurant_sence
      break
    case 'dreams_birds_sence':
      console.log(elephant_shed_sence)
      sence_data = elephant_shed_sence
      break

    default:
      console.log('无匹配场景')
      break
  }
  return sence_data
}
