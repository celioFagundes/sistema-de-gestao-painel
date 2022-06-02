import Link from 'next/link'
import ArrowLeft from '../Icons/ArrowLeft'
import { BackIcon } from './styles'

type Props = {
    url: string
}

const BackButton = (props: Props) => {
  return (
    <Link href={props.url}>
      <BackIcon>
        <ArrowLeft/>
      </BackIcon>
    </Link>
  )
}

export default BackButton
