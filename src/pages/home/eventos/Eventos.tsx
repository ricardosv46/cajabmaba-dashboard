import { AddIcon, DeleteIcon, EditIcon } from '@chakra-ui/icons'
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  Button,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  IconButton,
  Switch,
  Spinner,
  useToast
} from '@chakra-ui/react'
import { useNavigate } from 'react-router-dom'
import { InputMaybe } from '../../../generated/graphql'
import useEventos from '../../../services/useEventos'

const Eventos = () => {
  const navigate = useNavigate()
  const {
    db: eventos,
    loading,
    updateEstadoEvento,
    deleteEvento
  } = useEventos({ feriaId: 1, estado: null })
  console.log(eventos)
  const toast = useToast()

  const handleUpdateEstado = async (
    eventoId: InputMaybe<string> | string | undefined,
    estado: InputMaybe<string> | string | undefined
  ) => {
    updateEstadoEvento(eventoId, estado).then((res) => {
      if (res?.ok) {
        toast({
          title: 'Estado Actualizado Correctamente',
          position: 'top-right',
          isClosable: true,
          status: 'success'
        })
      } else {
        toast({
          title: 'Hubo un error',
          position: 'top-right',
          isClosable: true,
          status: 'error'
        })
      }
    })
  }
  const handleDeleteEvento = (eventoId: number) => {
    deleteEvento(eventoId).then((res) => {
      if (res?.ok) {
        toast({
          title: 'Evento eliminado Correctamente',
          position: 'top-right',
          isClosable: true,
          status: 'success'
        })
      } else {
        toast({
          title: 'Evento eliminado Correctamente',
          position: 'top-right',
          isClosable: true,
          status: 'error'
        })
      }
    })
  }
  return (
    <Container maxWidth="1930px" p={'10'}>
      <Flex flexDir={'column'}>
        <Box maxWidth={'full'}>
          <Heading as="h1" fontSize={22}>
            Eventos
          </Heading>
          <Text
            color="blackAlpha.600"
            _dark={{ color: 'gray.400' }}
            fontSize="14px"
            mt={3}
          >
            Desde aquí podrás visualizar la información de todos los Eventos.
          </Text>
        </Box>
        <Flex justifyContent="flex-end" alignItems="center" mt={5}>
          <Button
            colorScheme="primary"
            _dark={{ bg: '#F0AC42' }}
            variant="solid"
            leftIcon={<AddIcon />}
            onClick={() => navigate('/crear-evento')}
          >
            <Text lineHeight={0}>Crear Evento</Text>
          </Button>
        </Flex>
        {loading ? (
          <Flex justifyContent="center" alignItems="center" h={'xl'}>
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="primary.500"
              size="xl"
            />
          </Flex>
        ) : (
          <TableContainer mt={10}>
            <Table colorScheme="gray">
              <Thead fontWeight={'black'}>
                <Tr>
                  <Th color="gray.400">Slug</Th>
                  <Th color="gray.400">Titulo</Th>
                  <Th color="gray.400">direccion</Th>
                  <Th color="gray.400">Estados</Th>
                  <Th textAlign="center" color="gray.400">
                    Fecha
                  </Th>
                  <Th textAlign="center" color="gray.400">
                    Hora
                  </Th>
                  <Th textAlign="center" color="gray.400">
                    Acciones
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {eventos.map((evento) => (
                  <Tr key={evento.eventoId}>
                    <Td>{evento.slug}</Td>
                    <Td>{evento?.titulo}</Td>
                    <Td>{evento.direccion}</Td>
                    <Td>
                      <Switch
                        borderColor="transparent"
                        colorScheme="primary"
                        size="lg"
                        isChecked={evento.estado === 'Activado' && true}
                        onChange={
                          () =>
                            handleUpdateEstado(evento.eventoId, evento.estado)
                          // banco?.bancoId ?? '',
                          // banco.estado ?? ''
                        }
                      />
                    </Td>
                    <Td>{evento.fecha}</Td>
                    <Td>{evento.hora}</Td>
                    <Td>
                      <Flex justifyContent="center" alignItems="center" gap={5}>
                        <IconButton
                          aria-label="editar"
                          onClick={() =>
                            navigate(`/editar-evento/${evento.eventoId}`, {
                              state: { evento }
                            })
                          }
                        >
                          <EditIcon w={5} h={5} />
                        </IconButton>
                        <IconButton
                          aria-label="eliminar"
                          onClick={() => {
                            handleDeleteEvento(Number(evento.eventoId))
                          }}
                        >
                          <DeleteIcon w={5} h={5} />
                        </IconButton>
                      </Flex>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </TableContainer>
        )}

        {/* <Pagination state={state} setstate={setstate} paginas={paginas} /> */}
      </Flex>
      {/* <ModalDelete
        isOpen={isOpen}
        onClick={handleDelete}
        onClose={onClose}
        header="Eliminar Blog"
        body="¿Estas seguro que deseas eliminar este blog?"
      /> */}
    </Container>
  )
}

export default Eventos
