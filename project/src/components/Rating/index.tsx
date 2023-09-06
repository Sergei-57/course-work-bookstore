import star from '../../images/star.svg'
import activeStar from '../../images/activeStar.svg'

export function Rating({ rating }: { rating: string }): JSX.Element {
  function renderRatingStars(): JSX.Element[] {
    const stars = []

    for (let i: number = 1; i <= 5; i++) {
      stars.push(
        <img key={i} src={i <= Number(rating) ? activeStar : star} />
      )
    }
    return stars
  }

  return (
    <div className="rating">
      {renderRatingStars()}
    </div>
  )
}
