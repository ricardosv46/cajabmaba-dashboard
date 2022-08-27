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

const ModalContraseña = ({ isOpen, onClick, onClose, header, children }: IModal) => {
	return (
		<Modal isOpen={isOpen} onClose={onClose} isCentered>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader>{header}</ModalHeader>
				<ModalCloseButton />
				<form onSubmit={onClick}>
					<ModalBody>{children}</ModalBody>

					<ModalFooter>
						<Button type='button' mr={3} onClick={onClose}>
							Cancelar
						</Button>
						<Button type='submit' colorScheme='primary'>
							Actualizar
						</Button>
					</ModalFooter>
				</form>
			</ModalContent>
		</Modal>
	)
}

export default ModalContraseña
