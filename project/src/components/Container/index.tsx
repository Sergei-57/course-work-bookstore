import { ReactNode } from 'react'

interface ContainerProps {
  children: ReactNode
}

export function Container({ children }: ContainerProps): JSX.Element {
  return (
    <div className="container">
      {children}
    </div>
  )
}
