import { Icon, IconButton, useColorMode } from '@chakra-ui/react'
import { IconMoon, IconSun } from '../../icons'

const ToggleTheme = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      variant="ghost"
      onClick={toggleColorMode}
      aria-label="Cambiar tema"
      icon={<Icon as={colorMode === 'light' ? IconMoon : IconSun} />}
    />
  )
}

export default ToggleTheme
