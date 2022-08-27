import { Dispatch, ReactElement, SetStateAction, SVGProps } from 'react'
import { Box, Flex } from '@chakra-ui/react'

import ItemMultiStep from './ItemMultiStep'

export interface MultiStepItem {
  id: string
  title: string
  description: string
  component: ReactElement
  icon: (props: SVGProps<SVGSVGElement>) => ReactElement
}

interface Props {
  data: MultiStepItem[]
  currentStep: number
  setCurrentStep: Dispatch<SetStateAction<number>>
}

const MultiStep = ({ data, currentStep, setCurrentStep }: Props) => {
  return (
    <>
      <Flex
        py={3}
        gap={3}
        flexWrap={'wrap'}
        textColor={'gray.500'}
        borderBottomWidth={'1px'}
        borderBottomColor="gray.200"
      >
        {data.map(({ id, icon, title, description }, index) => (
          <ItemMultiStep
            key={id}
            isActive={index <= currentStep}
            isLast={index === data.length - 1}
            // Opcional ya que puede que el usuario quiera manipular el multistep
            onClick={() => setCurrentStep(index)}
            {...{ icon, title, description, index, currentStep }}
          />
        ))}
      </Flex>

      <Box p={3}>{data[currentStep].component}</Box>
    </>
  )
}

export default MultiStep
