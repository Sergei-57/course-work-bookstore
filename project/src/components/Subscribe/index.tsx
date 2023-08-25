import '../../styles/_subscribe.scss'

export function Subscribe(): JSX.Element {
  return (
    <div className="subscribe">
      <div className="subscribe__content">
        <h2 className="subscribe__title">Subscribe to Newsletter</h2>
        <p className="subscribe__subtitle">Be the first to know about new IT books, upcoming releases, exclusive offers and more.</p>
        <form className="subscribe__form d-flex">
          <input className="subscribe__input form-control" type="email" placeholder="Your email" />
          <button className="subscribe__button input-group-text" type="submit">Subscribe</button>
        </form>
      </div>
    </div>
  )
}
