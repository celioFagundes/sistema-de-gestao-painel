import Link from 'next/link'
import {  Container, Label } from './styles'
import {BsFillPersonPlusFill} from 'react-icons/bs'
type Props = {
    url: string
}

const NavigateButton = (props: Props) => {
  return (
    <Link href={props.url}>
      <Container>
        <BsFillPersonPlusFill size = {22} />
        <Label>
        Novo colaborador
        </Label>
        
      </Container>
    </Link>
  )
}

export default NavigateButton
