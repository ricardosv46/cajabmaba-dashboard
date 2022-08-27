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
	children: ReactElement
}

const ModalUpdateEstadoPedido = ({ isOpen, onClick, onClose, header, children }: IModal) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} isCentered>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{header}</ModalHeader>
				<ModalCloseButton />
				<ModalBody>{children}</ModalBody>

				<ModalFooter>
					<Button mr={3} onClick={onClose}>
						Cancelar
					</Button>
					<Button
						colorScheme='red'
						onClick={() => {
							onClick()
							onClose()
						}}>
						Actualizar
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	)
}

export default ModalUpdateEstadoPedido
