import {
  ArrowLeftIcon,
  ArrowRightIcon,
  ChevronLeftIcon,
  ChevronRightIcon
} from '@chakra-ui/icons'
import { Flex, IconButton, Select, Show, Text, Tooltip } from '@chakra-ui/react'
import React, { Dispatch } from 'react'

interface State {
  pagina: number
  numeroPagina: number
}

interface IProps {
  state: State
  setstate: Dispatch<React.SetStateAction<State>>
  paginas: number[]
}

const Pagination = ({ state, setstate, paginas }: IProps) => {
  const { pagina, numeroPagina } = state
  console.log(paginas.length)
  const increment = () => {
    if (paginas.length === pagina) return
    setstate({ ...state, pagina: pagina + 1 })
  }
  const decrement = () => {
    if (pagina === 1) return
    setstate({ ...state, pagina: pagina - 1 })
  }

  return (
    <>
      <Flex justifyContent="space-between" my={4} alignItems="center">
        <Flex>
          <Tooltip label="First pagina">
            <IconButton
              aria-label="primera pagina"
              onClick={() => setstate({ ...state, pagina: 1 })}
              icon={
                <ArrowLeftIcon h={{ base: 2, sm: 3 }} w={{ base: 2, sm: 3 }} />
              }
              mr={{ base: 1, sm: 4 }}
            />
          </Tooltip>
          <Tooltip label="Previous pagina">
            <IconButton
              aria-label="pagina anterior"
              onClick={decrement}
              icon={
                <ChevronLeftIcon
                  h={{ base: 4, sm: 6 }}
                  w={{ base: 4, sm: 6 }}
                />
              }
            />
          </Tooltip>
        </Flex>

        <Flex
          fontSize={{ base: '12px', md: 'inherit' }}
          alignItems="center"
          gap={12}
          px={5}
        >
          <Text flexShrink="0">
            pagina{' '}
            <Text fontWeight="bold" as="span">
              {pagina}
            </Text>{' '}
            of{' '}
            <Text fontWeight="bold" as="span">
              {paginas.length}
            </Text>
          </Text>
          <Show above="lg">
            <Flex alignItems="center">
              <Text flexShrink="0">Ir a la página :</Text>{' '}
              <Select
                as="select"
                id="paginas"
                w={24}
                p={1}
                textAlign="center"
                color="text-gray-600"
                value={pagina}
                onChange={(e) =>
                  setstate({ ...state, pagina: Number(e.target.value) })
                }
              >
                {paginas.map((pagina) => (
                  <Text
                    as="option"
                    textAlign="center"
                    key={pagina}
                    value={pagina}
                  >
                    {pagina}
                  </Text>
                ))}
              </Select>
            </Flex>
          </Show>
          <Show above="lg">
            <Flex alignItems="center">
              <Text flexShrink="0">Registros por página :</Text>{' '}
              <Select
                w={24}
                p={1}
                value={numeroPagina}
                textAlign="center"
                onChange={(e) =>
                  setstate({
                    ...state,
                    numeroPagina: Number(e.target.value)
                  })
                }
              >
                {[10, 20, 30, 40, 50].map((paginaSize) => (
                  <Text
                    as="option"
                    textAlign="center"
                    key={paginaSize}
                    value={paginaSize}
                  >
                    {paginaSize}
                  </Text>
                ))}
              </Select>
            </Flex>
          </Show>
        </Flex>

        <Flex>
          <Tooltip label="Next pagina">
            <IconButton
              aria-label="pagina siguiente"
              icon={
                <ChevronRightIcon
                  h={{ base: 4, sm: 6 }}
                  w={{ base: 4, sm: 6 }}
                />
              }
              onClick={increment}
            />
          </Tooltip>
          <Tooltip label="Last pagina">
            <IconButton
              onClick={() =>
                setstate({
                  ...state,
                  pagina: paginas.length
                })
              }
              aria-label="ultima pagina"
              icon={
                <ArrowRightIcon h={{ base: 2, sm: 3 }} w={{ base: 2, sm: 3 }} />
              }
              ml={{ base: 1, sm: 4 }}
            />
          </Tooltip>
        </Flex>
      </Flex>
      <Show below="lg">
        <Flex
          fontSize={{ base: '12px', md: 'inherit' }}
          alignItems="center"
          flexDirection="column"
          gap={2}
          px={5}
        >
          <Flex alignItems="center">
            <Text flexShrink="0">Ir a la página :</Text>{' '}
            <Select
              as="select"
              id="paginas"
              w={24}
              p={1}
              textAlign="center"
              color="text-gray-600"
              value={pagina}
              onChange={(e) =>
                setstate({ ...state, pagina: Number(e.target.value) })
              }
            >
              {paginas.map((pagina) => (
                <Text
                  as="option"
                  textAlign="center"
                  key={pagina}
                  value={pagina}
                >
                  {pagina}
                </Text>
              ))}
            </Select>
          </Flex>
          <Flex alignItems="center">
            <Text flexShrink="0">Registros por página :</Text>{' '}
            <Select
              w={24}
              p={1}
              value={numeroPagina}
              textAlign="center"
              onChange={(e) =>
                setstate({
                  ...state,
                  numeroPagina: Number(e.target.value)
                })
              }
            >
              {[10, 20, 30, 40, 50].map((paginaSize) => (
                <Text
                  textAlign="center"
                  as="option"
                  key={paginaSize}
                  value={paginaSize}
                >
                  {paginaSize}
                </Text>
              ))}
            </Select>
          </Flex>
        </Flex>
      </Show>
    </>
  )
}

export default Pagination
