import Head from 'next/head'
import Image from 'next/image'
import Container from '../components/Container'
import Features from '../components/Features'
import Header from '../components/Header'
import Hero from '../components/Hero'


export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Windland" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container bg='white'>
        <Header/>
      </Container>

      <Container bg={'transparent'}>
        <Hero/>
      </Container>

      <Container>
        <Features/>
      </Container>


    </div>
  )
}
