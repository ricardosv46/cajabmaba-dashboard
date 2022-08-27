import { useState } from 'react'
import { Link, useMatch } from 'react-router-dom'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Box, Flex, Icon, Text } from '@chakra-ui/react'

import SubmenuLink from './SubmenuLink'
import { SidebarLinkType } from '../../../interfaces'

type Props = SidebarLinkType & { onClick?: () => void }

const SidebarLink = ({ icon, name, to, onClick, subMenu }: Props) => {
  const match = useMatch(to!)
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Box>
      <Flex
        as={Link}
        to={to}
        px={8}
        py={4}
        cursor="pointer"
        rounded="lg"
        align="center"
        onClick={() => {
          if (subMenu.value === false && typeof onClick === 'function') {
            onClick()
          }
          setIsOpen(!isOpen)
        }}
        justifyContent="space-between"
        transition="all 250ms linear"
        bg={!subMenu.value && match ? 'white' : 'transparent'}
        color={match ? 'primary.500' : 'gray.400'}
        _hover={{ bg: 'white', color: 'primary.500' }}
        _dark={{ bg: match ? 'gray.700' : 'transparent' }}
      >
        <Flex alignItems="center">
          <Flex w="25px">
            <Icon as={icon} />
          </Flex>

          <Text fontSize="16px" fontWeight="semibold">
            {name}
          </Text>
        </Flex>
        {subMenu.value && (
          <Flex
            transition="all"
            transitionDuration="0.5s"
            transitionTimingFunction="ease-in-out"
            transform={isOpen ? 'rotate(90deg)' : 'rotate(270deg)'}
            justifyContent="center"
            alignItems="center"
          >
            <ChevronLeftIcon />
          </Flex>
        )}
      </Flex>

      {subMenu.value
        ? isOpen &&
          subMenu.paths
            .filter((path) => path.render)
            .map(({ icon, name, to, path }) => (
              <SubmenuLink
                key={path}
                onClick={onClick}
                {...{ icon, name, path, subMenu, to }}
              />
            ))
        : null}
    </Box>
  )
}

export default SidebarLink
