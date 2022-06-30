import { Container } from './styles'
type Props = {
  type: 'submit' | 'button' 
  children: React.ReactNode
  onClick?: () => void
}

const Button = (props: Props) => {
  return <Container type={props.type} onClick ={props.onClick}>{props.children}</Container>
}

export { Button }
