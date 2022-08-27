/* eslint-disable multiline-ternary */
/* eslint-disable react/jsx-no-comment-textnodes */
// import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  //   Icon,
  // IconButton,
  // Image,
  //   Show,
  // Spinner,
  // Switch,
  Table,
  TableContainer,
  // Tbody,
  // Td,
  Text,
  Th,
  Thead,
  Tr
  // useDisclosure,
  // useToast
} from '@chakra-ui/react'
// import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
// import ModalDelete from '../../../components/modal/ModalDelete'
// import { useBancos } from '../../../services/useBancos'

const BanksPage = () => {
  const navigate = useNavigate()
  // const { isOpen, onOpen, onClose } = useDisclosure()

  // const { db: dataBancos, loading, actualizarEstadoBanco, eliminarBanco } = useBancos()
  // const toast = useToast()
  // const [selectId, setSelectId] = useState<string>('')

  // const handleDelete = () => {
  //   eliminarBanco(parseInt(selectId)).then((res) => {
  //     if (res?.ok) {
  //       toast({
  //         title: 'Eliminado Correctamente',
  //         position: 'top-right',
  //         isClosable: true,
  //         status: 'success'
  //       })
  //     } else {
  //       toast({
  //         title: res?.error,
  //         position: 'top-right',
  //         isClosable: true,
  //         status: 'error'
  //       })
  //     }
  //   })
  // }

  // const handleUpdateEstado = (id: string, estado: string) => {
  //   actualizarEstadoBanco({
  //     bancoId: id,
  //     estado: estado === 'Activado' ? 'Desactivado' : 'Activado'
  //   }).then((res) => {
  //     if (res?.ok) {
  //       toast({
  //         title: 'Estado Actualizado Correctamente',
  //         position: 'top-right',
  //         isClosable: true,
  //         status: 'success'
  //       })
  //     } else {
  //       toast({
  //         title: res?.error,
  //         position: 'top-right',
  //         isClosable: true,
  //         status: 'error'
  //       })
  //     }
  //   })
  // }

  return (
    <Container maxWidth="1930px" p={'10'}>
      <Flex flexDir={'column'}>
        <Box maxWidth={'full'}>
          <Heading as="h1" fontSize={22}>
            Bancos asociados
          </Heading>
          <Text
            color="blackAlpha.600"
            _dark={{ color: 'gray.400' }}
            fontSize="14px"
            mt={3}
          >
            Desde aquí podrás visualizar la información de los bancos.
          </Text>
        </Box>
        <Flex justifyContent="flex-end" alignItems="center" mt={5}>
          <Button
            colorScheme="primary"
            variant="solid"
            // leftIcon={<AddIcon />}
            onClick={() => navigate('/create-bank')}
          >
            <Text lineHeight={0}>Crear Banco</Text>
          </Button>
        </Flex>
        {/* eslint-disable-next-line multiline-ternary */}
        {/* {loading ? (
          <Flex justifyContent='center' alignItems='center' h={'xl'}>
            <Spinner
              thickness='4px'
              speed='0.65s'
              emptyColor='gray.200'
              color='primary.500'
              size='xl'
            />
          </Flex>
        ) : ( */}
        <TableContainer mt={10}>
          <Table colorScheme="gray">
            <Thead fontWeight={'black'}>
              <Tr>
                <Th color="gray.400">Imagen</Th>
                <Th color="gray.400">Nombre</Th>
                <Th color="gray.400">N° cuenta</Th>

                <Th color="gray.400">Estado</Th>
                <Th textAlign="center" color="gray.400">
                  Acciones
                </Th>
              </Tr>
            </Thead>
            {/* <Tbody>
                {dataBancos.map((banco) => (
                  <Tr key={banco.bancoId}>
                    <Td>
                      <Image
                        boxSize='50px'
                        objectFit='contain'
                        src={banco.imagenPrincipal?.url || ''}
                        alt={banco.imagenPrincipal?.titulo ?? 'sin foto'}
                      />
                    </Td>
                    <Td>{banco.titulo}</Td>

                    <Td>{banco.numeroCuenta}</Td>

                    <Td>
                      <Switch
                        borderColor='transparent'
                        colorScheme='primary'
                        size='lg'
                        isChecked={banco?.estado === 'Activado' && true}
                        onChange={() =>
                          handleUpdateEstado(banco?.bancoId ?? '', banco.estado ?? '')
                        }
                      />
                    </Td>
                    <Td>
                      <Flex justifyContent='center' alignItems='center' gap={5}>
                        <IconButton
                          aria-label='editar'
                          onClick={() =>
                            navigate(`/home/edit-bank/${banco.bancoId}`, {
                              state: banco
                            })
                          }
                        >
                          <EditIcon w={5} h={5} />
                        </IconButton>
                        <IconButton
                          aria-label='eliminar'
                          onClick={() => {
                            onOpen()
                            setSelectId(banco?.bancoId ?? '')
                          }}
                        >
                          <DeleteIcon w={5} h={5} />
                        </IconButton>
                      </Flex>
                    </Td>
                  </Tr>
                ))}
              </Tbody> */}
          </Table>
        </TableContainer>
        {/* )} */}
      </Flex>
      {/* <ModalDelete
        // isOpen={isOpen}
        // onClick={handleDelete}
        // onClose={onClose}
        header='Eliminar Banco'
        body='¿Estas seguro que deseas eliminar este banco?'
      /> */}
    </Container>
  )
}

export default BanksPage
