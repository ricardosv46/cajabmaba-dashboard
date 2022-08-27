import { ChevronRightIcon } from '@chakra-ui/icons'
import { Box, Flex, Icon, IconButton, Text } from '@chakra-ui/react'
import type { ReactElement, SVGProps } from 'react'

interface ItemMultiStepProps {
  icon: (props: SVGProps<SVGSVGElement>) => ReactElement
  title: string
  description: string
  index: number
  currentStep: number
  isLast?: boolean
  isActive?: boolean
  onClick?: () => void
}
const ItemMultiStep = ({
  icon,
  title,
  isLast,
  onClick,
  isActive,
  description
}: ItemMultiStepProps) => {
  return (
    <Box>
      <Flex gap={3} alignItems={'center'}>
        <IconButton
          onClick={onClick}
          colorScheme={isActive ? 'primary' : 'gray'}
          aria-label={`Boton para acceder a ${title}`}
          icon={<Icon as={icon} fill="currentcolor" />}
        />
        <Flex flexDirection={'column'}>
          <Text
            fontSize="14px"
            fontWeight={'bold'}
            _light={{ color: isActive ? 'primary.500' : 'gray.700' }}
            _dark={{ color: isActive ? 'primary.500' : 'gray.400' }}
          >
            {title}
          </Text>
          <Text fontSize="12px">{description}</Text>
        </Flex>
        {!isLast && <Icon as={ChevronRightIcon} />}
      </Flex>
    </Box>
  )
}

export default ItemMultiStep
