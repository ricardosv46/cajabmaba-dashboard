import { Flex, Icon, IconButton, useDisclosure } from '@chakra-ui/react'
import { IconBars, IconLogo } from '../../../icons'
import ToggleTheme from '../../shared/ToggleTheme'
import SidebarDrawer from '../Sidebar/SidebarDrawer'

const Navbar = () => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <>
      <SidebarDrawer isOpen={isOpen} onClose={onClose} />
      <Flex
        as="nav"
        py={2}
        px={8}
        align="center"
        justify="space-between"
        bg="gray.100"
        _dark={{ bg: 'gray.700' }}
      >
        <IconLogo />
        <Flex gap={2}>
          <ToggleTheme />
          <IconButton
            onClick={onOpen}
            colorScheme="primary"
            aria-label="Abrir menu"
            icon={<Icon as={IconBars} />}
            _dark={{ bg: '#F0AC42' }}
          />
        </Flex>
      </Flex>
    </>
  )
}

export default Navbar
