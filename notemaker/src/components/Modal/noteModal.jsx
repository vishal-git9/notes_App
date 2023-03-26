import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  Text,
  FormControl,
  Input,
  FormLabel,
  Textarea,
  Stack
} from '@chakra-ui/react'
import axios from 'axios'
import { useRef, useState } from 'react'
export default function Notemodal({isOpen,onClose,handleNotesData,handlenoteReq,handleupdateReq,editable,data}) {
    const initialRef = useRef(null)
    const finalRef = useRef(null)
  return (
    <>
      {/* <Button onClick={onOpen}>Open Modal</Button> */}

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody gap={"10px"} mt="20px" display="flex" flexDirection={"column"}>
          <FormControl>
              <FormLabel>Title</FormLabel>
              <Input ref={initialRef} placeholder='Title of the note' value={data?.title} name="title" onChange={(e)=>handleNotesData(e)} />
              </FormControl>
              <FormControl>
              <FormLabel>Subject</FormLabel>
              <Input ref={initialRef} placeholder='Subject of the note'value={data?.subject} name="subject" onChange={(e)=>handleNotesData(e)} />
            </FormControl>
            <Stack spacing={-2}>
            <Text fontSize={"16px"} fontWeight="600">Description</Text>
            <Textarea name="body" onChange={(e)=>handleNotesData(e)} value={data?.body} >
            </Textarea>
            </Stack>
          </ModalBody>

          <ModalFooter>
            {!editable?(<Button colorScheme='blue' mr={3} onClick={()=>handlenoteReq()}>
              ADD
            </Button>):<Button colorScheme='blue' mr={3} onClick={()=>handleupdateReq(data?._id)}>
              UPDATE
            </Button>}
            
            <Button variant='ghost' onClick={onClose}>CLOSE</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}