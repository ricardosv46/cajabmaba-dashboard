import { Flex } from '@chakra-ui/react'
import React from 'react'
import IconHeartEmpty from '../../icons/IconHeartEmpty'
import IconHeartSolid from '../../icons/IconHeartSolid'

interface Props {
  estado: boolean
}

const BtnDestacado = ({ estado = false }: Props) => {
  return (
    <Flex justifyContent='center'>
      {estado ? (
        <IconHeartSolid width={35} height={35} />
      ) : (
        <IconHeartEmpty width={35} height={35} />
      )}
    </Flex>
  )
}

export default BtnDestacado
