import React, { ChangeEvent, Dispatch, useMemo, useState } from 'react'
import { Box, chakra, Flex, FormLabel, Icon, IconButton, Text, useColorMode } from '@chakra-ui/react'
import { ChevronDownIcon } from '@chakra-ui/icons'

import InputFloat from '../../input/inputFloat'
import { isEmpty } from '../../../utils/isEmpty'

interface OptionProps {
	desc?: string
	label: string
	value: string
	onClick?: () => void
}

interface IData {
	value: string
	label: string
	desc: string
}
interface ISelectData {
	selectOptions: IData[]
	label: string
	innerValue: string
	setInnerValue: Dispatch<React.SetStateAction<string>>
	withFilter?: boolean
}

const Option = ({ onClick, label, desc }: OptionProps) => (
	<chakra.button type='button' onClick={onClick} textAlign='left'>
		<Flex
			p={2}
			w='full'
			pos='relative'
			align='center'
			borderLeftWidth='4px'
			borderLeftColor='transparent'
			color={'black'}
			_dark={{ _hover: { borderLeftColor: 'second.500', bg: 'second.100' } }}
			transition='background 150ms linear'
			_hover={{ borderLeftColor: 'primary.500', bg: 'primary.50' }}>
			<Flex align='center' w='full'>
				<Box mx='8px' mt='-4px'>
					<Text fontWeight='semibold'>{label}</Text>
					<Box w='full' mt='-4px'>
						<Text fontSize='12px' color='gray.500' textTransform='none'>
							{desc}
						</Text>
					</Box>
				</Box>
			</Flex>
		</Flex>
	</chakra.button>
)

const Select = ({ selectOptions, label, innerValue, setInnerValue, withFilter }: ISelectData) => {
	const [isOpen, setIsOpen] = useState(false)
	const [clase, setClase] = useState(false)
	const { colorMode } = useColorMode()
	const handleSelect = (data: OptionProps) => {
		setIsOpen(false)
		setInnerValue(data.value)
	}
	return (
		<Box w='full'>
			<Box h='60px' w='full' pos='relative'>
				<Flex
					bg={'gray.100'}
					w='full'
					h='full'
					transition={'all 0.3s'}
					rounded='none'
					_dark={{
						borderBottomColor: clase ? '#F0AC42' : '#F0AC42',
						boxShadow: clase ? '0 0 0 1px #F0AC42' : '',
						backgroundColor: 'gray.700'
					}}
					border={'none'}
					roundedTop={'md'}
					borderBottom={'2px'}
					pt={3}
					px={3}
					borderBottomWidth={'2px'}
					borderBottomColor={innerValue?.length > 1 ? 'primary.500' : 'gray.300'}
					_hover={{ boxShadow: 'none' }}
					boxShadow={clase ? '0 0 0 1px #A02E2B' : ''}
					justifyContent='space-between'>
					<Text pt={4}>{innerValue}</Text>
					<FormLabel
						_dark={{ color: '#F0AC42' }}
						position='absolute'
						color={'primary.500'}
						zIndex={1}
						transition={'all 0.3s'}
						_focus={{ top: 1, left: 3, fontSize: 'sm' }}
						top={innerValue?.length > 0 ? 1 : 19}
						left={innerValue?.length > 0 ? 3 : 3}
						fontSize={innerValue?.length > 0 ? 'sm' : 'md'}>
						{label}
					</FormLabel>
					<IconButton
						zIndex={999}
						variant='ghost'
						colorScheme={colorMode === 'light' ? 'primary' : 'second'}
						aria-label='Abrir select'
						icon={<Icon as={ChevronDownIcon} />}
						onClick={() => {
							setIsOpen((prev) => !prev)
							setClase(true)
						}}
					/>
				</Flex>
				<Box
					w='full'
					bg='white'
					top='105%'
					zIndex={40}
					shadow='base'
					pos='absolute'
					rounded='base'
					overflowY='auto'
					maxH={isOpen ? '300px' : '0'}>
					<Flex flexDir='column' w='full'>
						{selectOptions.map((data) => (
							<Option
								{...data}
								key={data.value}
								onClick={() => {
									handleSelect(data)
									setClase(false)
								}}
							/>
						))}
					</Flex>
				</Box>
			</Box>
		</Box>
	)
}

export default Select
