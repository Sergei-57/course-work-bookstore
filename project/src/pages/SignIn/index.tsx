import { useState, ChangeEvent, FormEvent } from 'react'
import { NavLink } from 'react-router-dom'
import { Button } from '../../components/Button'

export function SignIn(): JSX.Element {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  // Функция для отправки формы
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()

    console.log(`email: ${email}, password: ${password}`)

    setEmail('')
    setPassword('')
  }

  // Функции для обновления состояния
  function handleEmailChange(event: ChangeEvent<HTMLInputElement>): void {
    setEmail(event.target.value)
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>): void {
    setPassword(event.target.value)
  }

  return (
    <div className="form-auth">
      <form className="form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            placeholder="Email"
            onChange={handleEmailChange}
            value={email} />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            placeholder="Password"
            onChange={handlePasswordChange}
            value={password} />
        </div>
        <div className="mb-4">
          <NavLink
            to="/user/reset-password"
            className="form-link">Forgot password ?</NavLink>
        </div>
        <Button type="submit">Sign In</Button>
      </form>
    </div>
  )
}
