import { ReactNode } from 'react'
import '../../styles/_layout.scss'

interface LayoutProps {
  children: ReactNode
}

export function Layout(props: LayoutProps): JSX.Element {
  return (
    <div className="container">{props.children}</div>
  )
}
