import { ReactElement } from 'react'
import {
  faBeer,
  faBirthdayCake,
  faCircleQuestion,
  faHistory,
  faHome,
  faPeopleGroup,
  faVolleyball,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const headerNavLinks = [
  {
    icon: (
      <FontAwesomeIcon
        className="mr-3 inline h-8 w-10 p-0 text-amber-400 hover:text-red-600"
        icon={faHome}
      />
    ),
    href: '/',
    title: 'Home',
  },
  //{ href: '/block', title: 'Blog' },
  {
    icon: (
      <FontAwesomeIcon
        className="mr-3 inline h-8 w-10 p-0 text-amber-400 hover:text-red-600"
        icon={faHistory}
      />
    ),
    href: '/geschichte',
    title: 'Geschichte',
  },
  {
    icon: (
      <FontAwesomeIcon
        className="mr-3 inline h-8 w-10 p-0 text-amber-400 hover:text-red-600"
        icon={faPeopleGroup}
      />
    ),
    href: '/team',
    title: 'Team',
  },
  {
    icon: (
      <FontAwesomeIcon
        className="mr-3 inline h-8 w-10 p-0 text-amber-400 hover:text-red-600"
        icon={faBeer}
      />
    ),
    href: '/drinks',
    title: 'Drinks',
  },
  //{ href: '/tags', title: 'Tags' },
  {
    icon: (
      <FontAwesomeIcon
        className="mr-3 inline h-8 w-10 p-0 text-amber-400 hover:text-red-600"
        icon={faVolleyball}
      />
    ),
    href: '/sportarena',
    title: 'Sportarena',
  },
  //{ href: '/about', title: 'About' },
  {
    icon: (
      <FontAwesomeIcon
        className="mr-3 inline h-8 w-10 p-0 text-amber-400 hover:text-red-600"
        icon={faBirthdayCake}
      />
    ),
    href: '/events',
    title: 'Events',
  },
  {
    icon: (
      <FontAwesomeIcon
        className="mr-3 inline h-8 w-10 p-0 text-amber-400 hover:text-red-600"
        icon={faCircleQuestion}
      />
    ),
    href: '/kontakt',
    title: 'Wohin?',
  },
]

export default headerNavLinks
