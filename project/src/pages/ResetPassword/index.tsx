import { useState, ChangeEvent, FormEvent } from 'react'
import { Button } from '../../components/Button'

export function ResetPassword(): JSX.Element {
  const [email, setEmail] = useState('')

  // Функция для отправки формы
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()

    console.log(`email: ${email}`)

    setEmail('')
  }

  // Функция для обновления состояния
  function handleEmailChange(event: ChangeEvent<HTMLInputElement>): void {
    setEmail(event.target.value)
  }

  return (
    <div className="reset-password">
      <div className="reset-password__inner">
        <h2 className="reset-password__title">Reset password</h2>
        <form className="reset-password__form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="reset-password__label">Email</label>
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
