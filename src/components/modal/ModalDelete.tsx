import {
  Button,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay
} from '@chakra-ui/react'
import { ReactElement } from 'react'

interface IModal {
  isOpen: boolean
  onClose: () => void
  onClick: () => void
  header: string
  body: string | ReactElement
  nombreBotton?: string
  colorBoton?: string | number
}

const ModalDelete = ({
  isOpen,
  onClick,
  onClose,
  body,
  header,
  nombreBotton = 'Eliminar'
}: // colorBoton = 'red'
IModal) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>{header}</ModalHeader>
        <ModalCloseButton />
        <ModalBody>{body}</ModalBody>

        <ModalFooter>
          <Button mr={3} onClick={onClose}>
            Cancelar
          </Button>
          <Button
            colorScheme="red"
            onClick={() => {
              onClick()
              onClose()
            }}
          >
            {nombreBotton}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}

export default ModalDelete
