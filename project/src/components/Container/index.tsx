import { ContainerProps } from '../../types/type'

export function Container({ children }: ContainerProps): JSX.Element {
  return (
    <div className="container">
      {children}
    </div>
  )
}
