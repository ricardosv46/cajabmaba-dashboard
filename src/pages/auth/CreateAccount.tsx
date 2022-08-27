import { Flex } from '@chakra-ui/react'
import { useState } from 'react'
import Register from './componentsCreateAccount/Register'
import Succefull from './componentsCreateAccount/Succefull'
import TextWelcome from './componentsCreateAccount/TextWelcome'
import TextYourAccount from './componentsCreateAccount/TextYourAccount'

const CreateAccount = () => {
  const [showNetx, setShowNext] = useState(false)

  return (
    <Flex
      flexDir={{ base: 'column', lg: 'row' }}
      justifyContent={'space-between'}
      height={{ base: 'full', lg: '100vh' }}
    >
      {!showNetx ? <TextYourAccount /> : <TextWelcome />}
      {!showNetx ? <Register setShowNext={setShowNext} /> : <Succefull />}
    </Flex>
  )
}

export default CreateAccount
