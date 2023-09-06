import { ReactNode } from 'react'

interface MainProps {
  children: ReactNode
}

export function Main(props: MainProps): JSX.Element {
  return (
    <main className="main">
      {props.children}
    </main>
  )
}
