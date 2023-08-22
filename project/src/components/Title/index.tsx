import { ReactNode } from 'react'

interface TitleProps {
  children: ReactNode
}

export function Title(props: TitleProps): JSX.Element {
  return (
    <h1 className="title">{props.children}</h1>
  )
}
