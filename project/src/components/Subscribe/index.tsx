import { useState, ChangeEvent, FormEvent } from 'react'
import { Title } from '../Title'

export function Subscribe(): JSX.Element {
  const [email, setEmail] = useState<string>('')

  function handleEmailChange(event: ChangeEvent<HTMLInputElement>): void {
    setEmail(event.target.value)
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault()
    setEmail('')
  }

  return (
    <div className="subscribe">
      <div className="subscribe__content">
        <Title>Subscribe to Newsletter</Title>
        <p className="subscribe__text">Be the first to know about new IT books, upcoming releases, exclusive offers and more.</p>
        <div className="input-group mb-3 mt-3 ">
          <form className="subscribe__form d-flex w-100" onSubmit={handleSubmit}>
            <input type="email" className="form-control p-3" placeholder="Your email" value={email} onChange={handleEmailChange} />
            <button className="btn btn-secondary">Subscribe</button>
          </form>
        </div>
      </div>
    </div>
  )
}
