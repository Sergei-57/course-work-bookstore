import { NavLink } from 'react-router-dom'
import arrow from '../../images/arrow.svg'

export function BackHomeLink(): JSX.Element {
  return (
    <div className="back-home mt-4">
      <NavLink to="/">
        <img src={arrow} alt="arrow" />
      </NavLink>
    </div>
  )
}
