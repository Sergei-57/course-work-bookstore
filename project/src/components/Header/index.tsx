import { NavLink } from 'react-router-dom'
import { SearchForm } from '../SearchForm'
import logo from '../../images/logo.svg'
import favorite from '../../images/favorite.svg'
import basket from '../../images/basket.svg'
import user from '../../images/user.svg'

export function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <NavLink className="logo" to="/">
          <img src={logo} alt="logo" />
        </NavLink>
        <SearchForm />
        <div className="header__links">
          <NavLink className="header__link" to="./my-favorites"><img className="header__icon" src={favorite} alt="favorite" />
          </NavLink>
          <NavLink className="header__link" to="./cart"><img className="header__icon" src={basket} alt="bascet" />
          </NavLink>
          <NavLink className="header__link" to="./user"><img className="header__icon" src={user} alt="user" /></NavLink>
        </div>
      </div>
    </header>
  )
}
