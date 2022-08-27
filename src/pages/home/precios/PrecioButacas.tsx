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
import InputFloat from '../../../components/input/inputFloat'
import ModalUpdateEstadoPedido from '../../../components/modal/ModalUpdateEstadoPedido'
import useForm from '../../../hooks/useForm'
import useToggle from '../../../hooks/useToggle'
import useButacas from '../../../services/useButacas'
const initialState = {
  precio: 0,
  butacaId: ''
}
const PrecioButacas = () => {
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useToggle()
  // const [innerValue, setInnerValue] = useState<string>('')
  // const [selectValue, setSelectValue] = useState<number>(0)
  const {
    db: butacas,
    updatePrecioButaca,
    loading
  } = useButacas({ tendido: '' })
  console.log(butacas)
  const { values, ...form } = useForm({
    initialValues: initialState
  })
  const handleUpdatePrecioButaca = (butacaId: string, precio: number) => {
    updatePrecioButaca(butacaId, precio).then((res) => {
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
            Precios de Butacas
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
          <>
            {/* <Select innerValue={innerValue} setInnerValue={setInnerValue} /> */}
            <TableContainer mt={10}>
              <Table colorScheme="gray">
                <Thead fontWeight={'black'}>
                  <Tr>
                    <Th color="gray.400">Codigo</Th>
                    <Th color="gray.400">precio</Th>

                    <Th textAlign="center" color="gray.400">
                      Acciones
                    </Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {butacas.map((butaca) => (
                    <Tr key={butaca?.butacaId}>
                      <Td>{butaca?.codigo}</Td>
                      <Td>
                        {String(butaca?.precio).includes('.')
                          ? butaca?.precio
                          : `${butaca?.precio}.00`}
                      </Td>

                      <Td>
                        <Flex
                          justifyContent="center"
                          alignItems="center"
                          gap={5}
                        >
                          <IconButton
                            aria-label="editar"
                            onClick={() => {
                              onOpen()
                              values.precio = Number(butaca?.precio)

                              values.butacaId = String(butaca?.butacaId)
                              console.log(values.precio)
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
          </>
        )}

        {/* <Pagination state={state} setstate={setstate} paginas={paginas} /> */}
      </Flex>
      <ModalUpdateEstadoPedido
        isOpen={isOpen}
        onClose={onClose}
        header="Actualizar Precio"
        onClick={() => handleUpdatePrecioButaca(values.butacaId, values.precio)}
      >
        <Box>
          <InputFloat
            type="number"
            label="Precio Butaca"
            // value={values.precio + '.00'}
            {...form.inputProps('precio')}
          />
        </Box>
      </ModalUpdateEstadoPedido>
    </Container>
  )
}

export default PrecioButacas
