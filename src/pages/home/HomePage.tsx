import { Heading } from '@chakra-ui/react'
import { Outlet } from 'react-router-dom'

const HomePage = () => {
  return (
    <div>
      <Heading>HOME</Heading>
      <Outlet />
    </div>
  )
}

export default HomePage
