import { useState } from 'react'
import { nanoid } from 'nanoid'
import { Container, Flex } from '@chakra-ui/react'
import Page1 from '../../components/multiStep/pages/Page1'
import Page2 from '../../components/multiStep/pages/Page2'
import Page3 from '../../components/multiStep/pages/Page3'
import MultiStep, { MultiStepItem } from '../../components/multiStep/MultiStep'

import HomeIcon from '../../assets/icons/HomeIcon'
import FileIcon from '../../assets/icons/File.Icon'
import ImageIcon from '../../assets/icons/ImageIcon'

export interface MultiStepChildrenProps {
  next: () => void
  back: () => void
  handleSubmit: () => void
}

const MultiStepPage = () => {
  const [stepper, setStepper] = useState(0)

  const props: MultiStepChildrenProps = {
    next: () => setStepper((prev) => prev + 1),
    back: () => setStepper((prev) => (prev === 0 ? 0 : prev - 1)),
    handleSubmit: () => {
      // Funcion para enviar formulario
    }
  }

  const itemMultiStep: MultiStepItem[] = [
    {
      id: nanoid(),
      icon: HomeIcon,
      title: 'Datos generales',
      description: 'Agrega los datos generales del usuario',
      component: <Page1 {...props} />
    },
    {
      id: nanoid(),
      icon: ImageIcon,
      title: 'Informacion personal',
      description: 'Agrega informacion personal del usuario',
      component: <Page2 {...props} />
    },
    {
      id: nanoid(),
      icon: FileIcon,
      title: 'Imagenes',
      description: 'Selecciona imagenes para el usuario',
      component: <Page3 {...props} />
    }
  ]

  return (
    <Container maxWidth="full" p={'10'}>
      <Flex flexDir={'column'}>
        <MultiStep
          data={itemMultiStep}
          currentStep={stepper}
          setCurrentStep={setStepper}
        />
      </Flex>
    </Container>
  )
}

export default MultiStepPage
