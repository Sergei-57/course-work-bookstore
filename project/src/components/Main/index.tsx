import { MainProps } from '../../types/type'

export function Main(props: MainProps): JSX.Element {
  return (
    <main className="main">
      {props.children}
    </main>
  )
}
