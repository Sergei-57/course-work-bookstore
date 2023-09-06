import { Outlet } from 'react-router-dom'
import { ToggleAuth } from '../../components/ToggleAuth'

export function Autorization () {
  return (
    <div className="autorization ">
      <ToggleAuth />
      <Outlet />
    </div>
  )
}
