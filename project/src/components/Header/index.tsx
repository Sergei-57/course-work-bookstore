import { SearchForm } from "../SearchForm"
import logo from "../../images/logo.svg"
import favorite from "../../images/favorite.svg"
import basket from "../../images/basket.svg"
import user from "../../images/user.svg"

export function Header() {
  return (
    <div className="header d-flex">
      <div className="header__logo">
        <img src={logo} alt="logo" />
      </div>
      <SearchForm />
      <div className="header__icons">
        <img src={favorite} alt="favorite" />
        <img src={basket} alt="basket" />
        <img src={user} alt="user" />
      </div>
    </div>
  )
}
