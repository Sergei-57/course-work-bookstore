import { ButtonProps } from '../../types/interface'

export function Button({ children, type, onClick }: ButtonProps): JSX.Element {
  return (
    <button className="button button_lg" type={type} onClick={onClick}>{children}</button>
  )
}
