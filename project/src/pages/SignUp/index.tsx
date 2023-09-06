import { useState, ChangeEvent, FormEvent } from 'react'
import { Button } from '../../components/Button'

export function SignUp(): JSX.Element {
  const [userName, setUserName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmPassword, setConfirmPassword] = useState<string>('')

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()

    console.log(`name: ${name}, email: ${email}, password: ${password}, confirmPassword: ${confirmPassword}`)

    setUserName('')
    setEmail('')
    setPassword('')
    setConfirmPassword('')
  }

  function handleUserNameChange(event: ChangeEvent<HTMLInputElement>): void {
    setUserName(event.target.value)
  }

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>): void {
    setEmail(event.target.value)
  }

  function handlePasswordChange(event: ChangeEvent<HTMLInputElement>): void {
    setPassword(event.target.value)
  }

  function handleConfirmPasswordChange(event: ChangeEvent<HTMLInputElement>): void {
    setConfirmPassword(event.target.value)
  }

  return (
    <div className="form-auth">
      <form className="form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="username" className="form-label">Username</label>
          <input
            type="text"
            className="form-control"
            id="username"
            placeholder="Username"
            onChange={handleUserNameChange}
            value={userName} />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email address</label>
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
        <div className="mb-3">
          <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            placeholder="Confirm Password"
            onChange={handleConfirmPasswordChange}
            value={confirmPassword} />
        </div>
        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  )
}
