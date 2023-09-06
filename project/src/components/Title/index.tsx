import { TitleProps } from '../../types/type'

export function Title(props: TitleProps): JSX.Element {
  return (
    <h1 className="title">{props.children}</h1>
  )
}
