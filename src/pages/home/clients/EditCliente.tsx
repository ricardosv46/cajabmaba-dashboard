import { ChevronLeftIcon } from '@chakra-ui/icons'
import {
  Box,
  Button,
  Checkbox,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Grid,
  Heading,
  Text
} from '@chakra-ui/react'
import moment from 'moment'
import { GroupBase, OptionBase, Select } from 'chakra-react-select'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import InputFloat from '../../../components/input/inputFloat'
import useForm from '../../../hooks/useFormOld'
import { Errors } from '../../../interfaces/client'
import { createClientValidation } from '../../../validation/createClientValidation'

const mappedcolorOptions = [
  { value: 'blue', label: 'Blue', color: '#0052CC' },
  { value: 'purple', label: 'Purple', color: '#5243AA' },
  { value: 'red', label: 'Red', color: '#FF5630' },
  { value: 'orange', label: 'Orange', color: '#FF8B00' },
  { value: 'yellow', label: 'Yellow', color: '#FFC400' },
  { value: 'green', label: 'Green', color: '#36B37E' }
]

interface ColorOption extends OptionBase {
  label: string
  value: string
  color?: string
}

const EditCliente = () => {
  const [showAlergia, setShowAlergia] = useState(true)
  const [isDisable, setIsDisable] = useState(false)
  const [errorMessage, setErrorMessage] = useState<Errors | undefined>()

  const navigate = useNavigate()

  const {
    nombreCongresista,
    apellidoCongresista,
    nroDocumentoCongresista,
    emailCongresista,
    paisCongresista,
    tipoAlergiaCongresista,
    nroVueloLlegadaCongresista,
    nroVueloSalidaCongresista,
    horaLlegadaCongresista,
    horaSalidaCongresista,
    fechaLlegadaCongresista,
    fechaSalidaCongresista,
    hotelCongresista,
    onChange
  } = useForm({
    nombreCongresista: '',
    apellidoCongresista: '',
    nroDocumentoCongresista: '',
    celularCongresista: '',
    emailCongresista: '',
    paisCongresista: '',
    tipoAlergiaCongresista: '',
    empresaCongresista: '',
    nroVueloLlegadaCongresista: '',
    nroVueloSalidaCongresista: '',
    horaLlegadaCongresista: '',
    horaSalidaCongresista: '',
    fechaLlegadaCongresista: '',
    fechaSalidaCongresista: '',
    hotelCongresista: ''
  })

  const handleSubmit = async () => {
    const errors = createClientValidation({
      nombreCongresista,
      apellidoCongresista,
      nroDocumentoCongresista,
      emailCongresista,
      paisCongresista,
      nroVueloLlegadaCongresista,
      nroVueloSalidaCongresista,
      horaLlegadaCongresista,
      horaSalidaCongresista,
      fechaLlegadaCongresista,
      fechaSalidaCongresista,
      hotelCongresista
    })
    setErrorMessage(errors)
    if (errors.ok) {
      setIsDisable(true)
    } else {
      setIsDisable(false)
    }
  }

  useEffect(() => {
    if (errorMessage) {
      const errors = createClientValidation({
        nombreCongresista,
        apellidoCongresista,
        nroDocumentoCongresista,
        emailCongresista,
        paisCongresista,
        nroVueloLlegadaCongresista,
        nroVueloSalidaCongresista,
        horaLlegadaCongresista,
        horaSalidaCongresista,
        fechaLlegadaCongresista,
        fechaSalidaCongresista,
        hotelCongresista
      })
      setErrorMessage(errors)
      if (errors.ok) {
        setIsDisable(true)
      } else {
        setIsDisable(false)
      }
    }
  }, [
    nombreCongresista,
    apellidoCongresista,
    nroDocumentoCongresista,
    emailCongresista,
    paisCongresista,
    nroVueloLlegadaCongresista,
    nroVueloSalidaCongresista,
    horaLlegadaCongresista,
    horaSalidaCongresista,
    fechaLlegadaCongresista,
    fechaSalidaCongresista,
    hotelCongresista
  ])

  return (
    <Container maxWidth="1930px" p={'10'}>
      <Flex flexDir={'column'}>
        <Box maxWidth={'full'}>
          <Flex alignItems={'center'} columnGap={4}>
            <Flex
              justifyContent="center"
              alignItems="center"
              padding={1.5}
              bg="primary.500"
              rounded="full"
              cursor={'pointer'}
              onClick={() => navigate(-1)}
            >
              <ChevronLeftIcon color={'white'} />
            </Flex>
            <Heading as="h1" fontSize={22}>
              Actualizar Cliente
            </Heading>
          </Flex>
        </Box>

        <Box maxWidth={'full'}>
          <Grid
            mt={5}
            templateColumns={{ base: 'repeat(1, 1fr)', sm: 'repeat(2, 1fr)' }}
            gap={6}
          >
            <InputFloat
              type="text"
              label="Nombres"
              name="nombreCongresista"
              value={nombreCongresista}
              onChange={onChange}
              errorMessage={errorMessage?.nombreCongresista}
            />
            <InputFloat
              type="text"
              label="Apellidos"
              name="apellidoCongresista"
              value={apellidoCongresista}
              onChange={onChange}
              errorMessage={errorMessage?.apellidoCongresista}
            />
            <InputFloat
              type="text"
              maxLength={8}
              label="Documento"
              name="nroDocumentoCongresista"
              value={nroDocumentoCongresista}
              onChange={onChange}
              errorMessage={errorMessage?.nroDocumentoCongresista}
            />

            <InputFloat
              type="text"
              label="E-mail"
              name="emailCongresista"
              value={emailCongresista}
              onChange={onChange}
              errorMessage={errorMessage?.emailCongresista}
            />

            <InputFloat
              type="text"
              label="Pais"
              name="paisCongresista"
              value={paisCongresista}
              onChange={onChange}
              errorMessage={errorMessage?.paisCongresista}
            />
            <InputFloat
              type="text"
              label="Hotel"
              name="hotelCongresista"
              value={hotelCongresista}
              onChange={onChange}
              errorMessage={errorMessage?.hotelCongresista}
            />
            <InputFloat
              type="text"
              label=" Nº Vuelo Llegada"
              name="nroVueloLlegadaCongresista"
              value={nroVueloLlegadaCongresista}
              onChange={onChange}
              errorMessage={errorMessage?.nroVueloLlegadaCongresista}
            />

            <InputFloat
              type="text"
              label=" Nº Vuelo Salida"
              name="nroVueloSalidaCongresista"
              value={nroVueloSalidaCongresista}
              onChange={onChange}
              errorMessage={errorMessage?.nroVueloSalidaCongresista}
            />

            <InputFloat
              type="date"
              label="Fecha Salida"
              name="fechaSalidaCongresista"
              value={fechaSalidaCongresista}
              onChange={onChange}
              errorMessage={errorMessage?.fechaSalidaCongresista}
            />
            <InputFloat
              type="time"
              label="Hora Salida"
              name="horaSalidaCongresista"
              value={horaSalidaCongresista}
              onChange={onChange}
              errorMessage={errorMessage?.horaSalidaCongresista}
            />
            <InputFloat
              type="date"
              label="Fecha Llegada"
              name="fechaLlegadaCongresista"
              value={moment().format(fechaLlegadaCongresista)}
              onChange={onChange}
              errorMessage={errorMessage?.fechaLlegadaCongresista}
            />
            <InputFloat
              type="time"
              label="Hora Llegada"
              name="horaLlegadaCongresista"
              value={horaLlegadaCongresista}
              onChange={onChange}
              errorMessage={errorMessage?.horaLlegadaCongresista}
            />

            <Flex flexDir="column" justifyContent="center" gap={2}>
              <Checkbox
                isChecked={!showAlergia}
                onChange={() => setShowAlergia(!showAlergia)}
                colorScheme="primary"
              >
                Sufres de algun tipo de alergia, hipertension, diabetes u otro
              </Checkbox>
              {!showAlergia ? (
                <InputFloat
                  type="text"
                  label="Menciona Cuales"
                  name="tipoAlergiaCongresista"
                  value={tipoAlergiaCongresista}
                  onChange={onChange}
                />
              ) : (
                <Box h="60px"></Box>
              )}
            </Flex>
            <FormControl>
              <FormLabel color="primary.500">Categoria</FormLabel>

              <Select<ColorOption, false, GroupBase<ColorOption>>
                name="colors"
                options={mappedcolorOptions}
                focusBorderColor="primary.300"
                placeholder="Select a color"
                selectedOptionColor="primary"
                chakraStyles={{
                  dropdownIndicator: (provided) => ({
                    ...provided,
                    bg: 'transparent',
                    px: 2,
                    cursor: 'inherit'
                  }),
                  indicatorSeparator: (provided) => ({
                    ...provided,
                    display: 'none'
                  })
                }}
              />
            </FormControl>
          </Grid>
        </Box>
      </Flex>
      <Flex justifyContent="center" py={14}>
        <Button
          type="button"
          w={96}
          py={7}
          colorScheme="primary"
          onClick={handleSubmit}
          disabled={isDisable}
        >
          <Text fontWeight="bold" fontSize="xl">
            Actualizar Cliente
          </Text>
        </Button>
      </Flex>
    </Container>
  )
}

export default EditCliente
