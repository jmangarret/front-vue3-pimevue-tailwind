import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import {
  faPhone,
  faUsers,
  faUniversity,
  faCreditCard,
  faHashtag,
  faMoneyBill,
  faCalendarAlt,
  faDollarSign,
  faCoins,
  faFunnelDollar,
  faPercentage,
  faShareSquare
} from '@fortawesome/free-solid-svg-icons'

library.add(
  faPhone,
  faUsers,
  faUniversity,
  faCreditCard,
  faHashtag,
  faMoneyBill,
  faCalendarAlt,
  faDollarSign,
  faCoins,
  faFunnelDollar,
  faPercentage,
  faShareSquare
)

const install = app => {
  app.component('font-awesome-icon', FontAwesomeIcon)
}

export { install as default }
