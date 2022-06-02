import Head from 'next/head'

type Props = {
  title: string
  description: string
}

const Seo = (props: Props) => {
  return (
    <Head>
      <title>{props.title}</title>
      <meta name='description' content={props.description} />
      <link rel='icon' href='/favicon.ico' />
    </Head>
  )
}

export default Seo
