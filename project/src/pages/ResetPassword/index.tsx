import { useState, ChangeEvent, FormEvent } from 'react'
import { Button } from '../../components/Button'

export function ResetPassword() {
  const [email, setEmail] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()

    console.log(`email: ${email}`)

    setEmail('')
  }

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>): void {
    setEmail(event.target.value)
  }

  return (
    <div className="reset-password">
      <div className="reset-password__inner">
        <h2 className="reset-password__title">Reset password</h2>
        <form className="reset-password__form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="reset-password__form-label">Email</label>
          <input
            type="email"
            className="form-control"
            id="resetPasswordEmail"
            placeholder="Your email"
            value={email}
            onChange={handleEmailChange} />
          <Button type="submit">reset</Button>
        </form>
      </div >
    </div>
  )
}
