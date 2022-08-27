import { Button, Flex } from '@chakra-ui/react'
import { MultiStepChildrenProps } from '../../../pages/home/MultiStepPage'

const Page2 = ({ next, back }: MultiStepChildrenProps) => {
  return (
    <Flex
      flexDirection={'column'}
      justifyContent={'space-between'}
      height="500px"
    >
      Page2
      <Flex justifyContent={'space-between'}>
        <Button onClick={back}>Back</Button>
        <Button onClick={next}>Next</Button>
      </Flex>
    </Flex>
  )
}

export default Page2
