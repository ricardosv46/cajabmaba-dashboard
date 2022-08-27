import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay
} from '@chakra-ui/react'
import Sidebar from '.'

interface Props {
  isOpen: boolean
  onClose: () => void
}

const SidebarDrawer = ({ isOpen, onClose }: Props) => {
  return (
    <Drawer placement='left' isOpen={isOpen} onClose={onClose}>
      <DrawerOverlay />
      <DrawerContent>
        <DrawerBody p={0}>
          <Sidebar mobile onClose={onClose} onToggle={() => {}} />
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default SidebarDrawer
