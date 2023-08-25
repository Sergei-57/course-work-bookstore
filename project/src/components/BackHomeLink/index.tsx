import arrow from '../../images/arrow.svg'


export function BackHomeLink(): JSX.Element {
  return (
    <div className="back-home mt-4">
      <a href="/">
        <img src={arrow} alt="arrow" />
      </a>
    </div>
  )
}
