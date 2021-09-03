import { Heading } from '@chakra-ui/react'
import type { NextPage } from 'next'

const Home: NextPage = () => {
  return (
    <>
      {[1, 2, 3, 4].map((v, idx) => (
        <Heading as="h1" key={idx}>Epale Daniel {v}</Heading>
      ))}
    </>
  )
}

export default Home
