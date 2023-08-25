import { NavLink } from 'react-router-dom'
import { SearchForm } from "../SearchForm"
import logo from "../../images/logo.svg"
import favorite from "../../images/favorite.svg"
import basket from "../../images/basket.svg"
import user from "../../images/user.svg"

export function Header() {
  return (
    <div className="header d-flex">
      <NavLink to="./" className="header__logo">
        <img src={logo} alt="logo" />
      </NavLink>
      <SearchForm />
      <div className="header__icons">
        <NavLink to="./my-favorites"><img className="header__icon" src={favorite} alt="favorite" /></NavLink>
        <NavLink to="./cart"><img className="header__icon" src={basket} alt="basket" /></NavLink>
        <NavLink to="./user"><img className="header__icon" src={user} alt="user" /></NavLink>
      </div>
    </div>
  )
}
