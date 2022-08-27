import {
  Box,
  Button,
  Flex,
  Icon,
  IconButton,
  Stack,
  Text
} from '@chakra-ui/react'
import { homeRoutes } from '../../../routes/routes'
import { IconClose, IconLogo } from '../../../icons'
import ToggleTheme from '../../shared/ToggleTheme'
import LogoutIcon from '../../../assets/icons/LogoutIcon'
import { useAuthContext } from '../../../store/auth/AuthState'
import SidebarLink from './SidebarLink'
import IconHome from '../../../icons/IconHome'

interface Props {
  onClose: () => void
  onToggle: () => void
  mobile: boolean
}

const Sidebar = ({ onClose, mobile }: Props) => {
  const { logout } = useAuthContext()

  return (
    <Box h="100vh" position="relative">
      <Box
        pb={20}
        h="100vh"
        bg="gray.100"
        overflow="scroll"
        _dark={{ bg: 'gray.700' }}
        scrollBehavior={'smooth'}
        css={{
          '&::-webkit-scrollbar': {
            width: '4px'
          },
          '&::-webkit-scrollbar-track': {
            width: '6px'
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: '',
            borderRadius: '24px'
          }
        }}
      >
        <Box pt={16} px={8} mb={10}>
          <Flex justify="space-between" mb="48px">
            <IconLogo />
            {/* eslint-disable */}
            {mobile ? (
              <IconButton
                onClick={onClose}
                aria-label="Cerrar menu"
                icon={<Icon as={IconClose} />}
              />
            ) : (
              <ToggleTheme />
            )}
          </Flex>

          {/* <Flex justify="space-between" mb={2}>
            <Text fontSize="14px" fontWeight="medium">
              RUT: 96.669.520-K
            </Text>
          </Flex>

          <Text
            mb={3}
            fontSize="18px"
            lineHeight="28px"
            color="primary.600"
            fontWeight="semibold"
            _dark={{ color: 'white' }}
          >
            Metriks Digital Solutions
          </Text>

          <Text fontSize="12px" color="primary.500" _dark={{ color: 'white' }}>
            Último acceso: 13/07/2021 - 10:30
          </Text> */}
        </Box>
        <Stack px={3}>
          <SidebarLink
            to="/"
            name="Home"
            icon={IconHome}
            subMenu={{ value: false, paths: [] }}
          />

          {homeRoutes.map(({ icon, name, path, to, subMenu }) => (
            <SidebarLink
              key={path}
              onClick={onClose}
              {...{ icon, name, path, to, subMenu }}
            />
          ))}
        </Stack>
      </Box>
      <Flex
        position="absolute"
        bg="gray.100"
        _dark={{ bg: 'gray.700' }}
        w="full"
        bottom={0}
        p={5}
      >
        <Button
          colorScheme="primary"
          _focus={{ boxShadow: 'none' }}
          w="full"
          leftIcon={<LogoutIcon />}
          onClick={logout}
          _dark={{ bg: '#F0AC42' }}
        >
          <Text lineHeight={0}>Cerrar Sesión</Text>
        </Button>
      </Flex>
    </Box>
  )
}

export default Sidebar
