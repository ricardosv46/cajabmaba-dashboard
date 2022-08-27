import { Link, useMatch } from 'react-router-dom'
import { Flex, Icon, Text } from '@chakra-ui/react'

import { SidebarLinkType } from '../../../interfaces'

type Props = SidebarLinkType & { onClick?: () => void }

const SubmenuLink = ({ icon, name, to, onClick }: Props) => {
  const match = useMatch(to!)

  return (
    <Flex
      to={to}
      as={Link}
      px={14}
      py={4}
      rounded='lg'
      align='center'
      onClick={onClick}
      transition='all 250ms linear'
      bg={match ? 'white' : 'transparent'}
      color={match ? 'primary.500' : 'gray.400'}
      _hover={{ bg: 'white', color: 'primary.500' }}
      _dark={{ bg: match ? 'gray.700' : 'transparent' }}
    >
      <Flex w='25px'>
        <Icon as={icon} />
      </Flex>
      <Text fontSize='16px' fontWeight='semibold'>
        {name}
      </Text>
    </Flex>
  )
}

export default SubmenuLink
