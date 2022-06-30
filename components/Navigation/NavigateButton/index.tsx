import Link from 'next/link'
import {  Container, Label } from './styles'
import {BsFillPersonPlusFill} from 'react-icons/bs'
type Props = {
    url: string
    label: string
}

const NavigateButton = (props: Props) => {
  return (
    <Link href={props.url}>
      <Container>
        <BsFillPersonPlusFill size = {22} />
        <Label>
        {props.label}
        </Label>
        
      </Container>
    </Link>
  )
}

export  {NavigateButton}
