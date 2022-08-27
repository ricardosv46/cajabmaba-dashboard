import { EditIcon } from '@chakra-ui/icons'
import {
  Box,
  Container,
  Flex,
  Heading,
  Text,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  IconButton,
  useToast,
  Spinner
} from '@chakra-ui/react'
import React from 'react'
import InputFloat from '../../../components/input/inputFloat'
import ModalUpdateEstadoPedido from '../../../components/modal/ModalUpdateEstadoPedido'
import { InputMaybe } from '../../../generated/graphql'
import useForm from '../../../hooks/useForm'
import useToggle from '../../../hooks/useToggle'
import usePreciosPreferencial from '../../../services/usePreciosPreferencial'
// import { useNavigate } from 'react-router-dom'
const initialState = {
  precio: 0,
  referenciaId: ''
}
const PrecioReferencial = () => {
  const toast = useToast()
  const {
    db: precios,
    updatePrecioReferencial,
    loading
  } = usePreciosPreferencial()
  console.log(precios)
  const { isOpen, onOpen, onClose } = useToggle()
  const { values, ...form } = useForm({
    initialValues: initialState
  })
  const handleUpdatePrecioReferencial = (
    referenciaId: InputMaybe<string> | undefined,
    precio: number
  ) => {
    updatePrecioReferencial(referenciaId, precio).then((res) => {
      if (res?.ok) {
        toast({
          title: 'Precio actualizado Correctamente',
          position: 'top-right',
          isClosable: true,
          status: 'success'
        })
      } else {
        toast({
          title: 'Precio actualizado Inrrectamente',
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
            Precios Referencial
          </Heading>
          <Text
            color="blackAlpha.600"
            _dark={{ color: 'gray.400' }}
            fontSize="14px"
            mt={3}
          >
            Desde aquí podrás visualizar la información de todos los precios.
          </Text>
        </Box>
        <Flex justifyContent="flex-end" alignItems="center" mt={5}></Flex>
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
                  <Th color="gray.400">Titulo</Th>
                  <Th color="gray.400">Precio</Th>

                  <Th textAlign="center" color="gray.400">
                    Acciones
                  </Th>
                </Tr>
              </Thead>
              <Tbody>
                {precios.map((precio) => (
                  <Tr key={precio?.referenciaId}>
                    <Td>{precio?.titulo}</Td>
                    <Td>
                      {String(precio?.precio).includes('.')
                        ? precio?.precio
                        : `${precio?.precio}.00`}
                    </Td>

                    <Td>
                      <Flex justifyContent="center" alignItems="center" gap={5}>
                        <IconButton
                          aria-label="editar"
                          onClick={() => {
                            onOpen()
                            values.precio = Number(precio?.precio)
                            values.referenciaId = String(precio?.referenciaId)
                          }}
                        >
                          <EditIcon w={5} h={5} />
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
      <ModalUpdateEstadoPedido
        isOpen={isOpen}
        onClose={onClose}
        header="Actualizar Precio"
        onClick={() =>
          handleUpdatePrecioReferencial(values.referenciaId, values.precio)
        }
      >
        <Box>
          <InputFloat
            type="number"
            label="Precio Referencial"
            // value={Number(values.precio)}
            {...form.inputProps('precio')}
          />
        </Box>
      </ModalUpdateEstadoPedido>
    </Container>
  )
}

export default PrecioReferencial
