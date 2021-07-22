import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons"
import { Button, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, FormControl, FormLabel, Input, ModalFooter, Icon, InputGroup, InputRightElement, Tooltip } from "@chakra-ui/react"
import { useRouter } from "next/router"
import { useCallback, useRef, useState } from "react"
import { AiOutlineUserAdd } from 'react-icons/ai'

export function CreateAccount(){
    const router = useRouter()

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleSubmit = useCallback((event) => {
      event.preventDefault()
      router.push('/')
    }, [email, password])

    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)



    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = useRef()
    const finalRef = useRef()


    return(
        <>
        <Tooltip label="Create your Acoount">
        <Button 
          onClick={onOpen}
          pos="absolute"
          top="70px"
          ml="2"
          color="purple.400"
          opacity="0.7"
          _hover={{opacity: "1"}}
          >
            <Icon as={AiOutlineUserAdd} />
        </Button>
        </Tooltip>

  
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create your account</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <FormLabel>E-mail</FormLabel>


                <Input 
                  ref={initialRef} 
                  type="email" 
                  placeholder="Your best E-mail" 
                  variant="filled" 
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  
                  />


              </FormControl>
  
              <FormControl mt={4}>
                <FormLabel>Password</FormLabel>

                
                <InputGroup size="md">
                  <Input
                  pr="4.5rem"
                  type={show ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={handleClick}>
                    {show ? <Icon as={ViewIcon} /> : <Icon as={ViewOffIcon} />}
                  </Button>
                </InputRightElement>
              </InputGroup>


              </FormControl>
            </ModalBody>
  
            <ModalFooter>

              <Button 
                bg="purple.600" 
                type="submit"
                color="gray.900" 
                _hover={{bg: "purple.400"}}
                mr={3}
                onClick={handleSubmit}
                >
                Save
              </Button>

              <Button onClick={onClose} bg="red.500" color="gray.900" _hover={{bg: "red.400"}}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
}