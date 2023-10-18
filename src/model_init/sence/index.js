/* 场景匹配 */
import restaurant_sence from './restaurant_sence'
import elephant_shed_sence from './dreams_birds_sence'
import school_out_sence from './school_out_sence'
import school_in_sence from './school_in_sence'

export function getSence(sence) {
  let sence_data = null
  switch (sence) {
    case 'restaurant_sence':
      console.log(restaurant_sence.name)
      sence_data = restaurant_sence
      break
    case 'dreams_birds_sence':
      console.log(elephant_shed_sence)
      sence_data = elephant_shed_sence
      break
    case 'school_out_sence':
      console.log(school_out_sence)
      sence_data = school_out_sence
      break
    case 'school_in_sence':
      console.log(school_in_sence)
      sence_data = school_in_sence
      break

    default:
      console.log('无匹配场景')
      break
  }
  return sence_data
}
