import { Box, Button, Flex } from '@chakra-ui/react'
import { MultiStepChildrenProps } from '../../../pages/home/MultiStepPage'

const Page1 = ({ next }: MultiStepChildrenProps) => {
  return (
    <Flex
      flexDirection={'column'}
      justifyContent={'space-between'}
      height="500px"
    >
      Page1
      <Flex justifyContent={'space-between'}>
        <Box></Box>
        <Button onClick={next}>Next</Button>
      </Flex>
    </Flex>
  )
}

export default Page1
