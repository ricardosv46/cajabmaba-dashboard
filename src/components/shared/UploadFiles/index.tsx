import { DragEvent, useId, useRef, useState } from 'react'
import { Box, Center, Flex, Spinner, Text, useToast } from '@chakra-ui/react'
import { nanoid } from 'nanoid'

import DropOrSelect from './DropOrSelect'
import DashboardFiles from './DashboardFiles'
import OverlayDropFiles from './OverlayDropFiles'

export interface FileToUpload {
  id: string
  file: File
  blob: Blob
}

interface Props {
  isLoading?: boolean
  onUpload?: (files: File[]) => Promise<boolean>
}

const UploadFiles = ({ onUpload, isLoading }: Props) => {
  const uid = useId()
  const toast = useToast()
  const dragCounterRef = useRef(0)
  const [isDragging, setIsDragging] = useState(false)
  const [files, setFiles] = useState<FileToUpload[]>([])

  const handleReset = () => {
    setFiles([])
  }

  const handleUpload = async () => {
    if (typeof onUpload === 'function') {
      const rawFiles = files.map(({ file }) => file)
      const res = await onUpload(rawFiles)
      if (!res) return

      handleReset()
    }
  }

  const handleDelete = (id: string) => {
    setFiles((prev) => prev.filter(({ id: _id }) => _id !== id))
  }

  const handleAdd = (files: FileList | null) => {
    if (!files) return
    let hasNotImageFile = false
    const newFiles: FileToUpload[] = []

    for (const file of [...files]) {
      if (!file.type.includes('image')) {
        console.log('Solo puede subir imagenes, type: ', file.type)
        hasNotImageFile = true
        continue
      }

      newFiles.push({
        file,
        id: nanoid(),
        blob: new Blob([file], { type: file.type })
      })
    }

    setFiles((prev) => [...prev, ...newFiles])

    if (hasNotImageFile) {
      toast({
        status: 'warning',
        title: 'Solo se deben seleccionar imagenes',
        description: 'Se han omitido los archivos que no son imagenes.'
      })
    }
  }

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    setIsDragging(false)
    if (e?.dataTransfer?.files && e?.dataTransfer?.files.length > 0) {
      handleAdd(e?.dataTransfer?.files)
      e?.dataTransfer.clearData()
      dragCounterRef.current = 0
    }
  }
  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
  }
  const handleDragEnter = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    dragCounterRef.current += 1
    if (e?.dataTransfer?.items && e?.dataTransfer?.items.length > 0) {
      setIsDragging(true)
    }
  }
  const handleDragLeave = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault()
    e.stopPropagation()
    dragCounterRef.current -= 1
    if (dragCounterRef.current > 0) return
    setIsDragging(false)
  }

  return (
    <Flex flex={1} maxW="1980px" mx="auto" w="full">
      <input
        hidden
        multiple
        type="file"
        id={`input-file-${uid}`}
        onChange={(e) => {
          const _files = e.target.files
          console.log({ _files })
          handleAdd(_files)
        }}
      />
      <Box
        as="div"
        p={2}
        w="full"
        flex={1}
        bg="gray.50"
        rounded="base"
        pos="relative"
        borderWidth={1}
        borderColor="gray.300"
        _dark={{ bg: 'gray.900', borderColor: 'gray.700' }}
        onDrop={handleDrop}
        onDragOver={handleDrag}
        onDragLeave={handleDragLeave}
        onDragEnter={handleDragEnter}
      >
        {isLoading && (
          <Center
            pos="absolute"
            inset={0}
            w="full"
            h="full"
            bg="rgba(250, 250, 250, 0.95)"
            _dark={{ bg: 'rgba(0, 0, 0, 0.95)' }}
            zIndex={40}
          >
            <Flex align="center" flexDir="column" gap={3}>
              <Spinner size="xl" color="primary.500" />
              <Text fontWeight="medium">
                Subiendo archivos por favor espere...
              </Text>
            </Flex>
          </Center>
        )}
        <OverlayDropFiles isDragging={isDragging} />
        {files.length === 0 && <DropOrSelect inputId={uid} />}
        {files.length !== 0 && (
          <DashboardFiles
            inputId={uid}
            files={files}
            onCancel={handleReset}
            onDelete={handleDelete}
            onUpload={handleUpload}
          />
        )}
      </Box>
    </Flex>
  )
}

export default UploadFiles
