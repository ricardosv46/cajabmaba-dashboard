import { Button, Flex } from '@chakra-ui/react'
import { MultiStepChildrenProps } from '../../../pages/home/MultiStepPage'

const Page3 = ({ back, handleSubmit }: MultiStepChildrenProps) => {
  return (
    <Flex
      flexDirection={'column'}
      justifyContent={'space-between'}
      height="500px"
    >
      Page3
      <Flex justifyContent={'space-between'}>
        <Button onClick={back}>Back</Button>
        <Button onClick={handleSubmit}>Finalizar</Button>
      </Flex>
    </Flex>
  )
}

export default Page3
