import Image from 'next/image'

import { Gutter } from '../../_components/Gutter'
import { profileNavItems } from '../../constants'
import UserInfo from './UserInfo'

import classes from './index.module.scss'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className={classes.container}>
      <Gutter>
        <h3>My Profile</h3>
        <div className={classes.account}>
          <div className={classes.nav}>
            <UserInfo />

            <ul>
              {profileNavItems.map(item => (
                <li key={item.url} className={classes.navItem}>
                  <Image src={item.icon} alt={item.title} width={24} height={24} />
                  <p>{item.title}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Gutter>
    </div>
  )
}