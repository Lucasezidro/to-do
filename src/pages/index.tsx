import { Box, Flex, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { ButtonColorMode } from "../components/ButtonColorMode";
import { CreateAccount } from "../components/CreateAccount";
import { InputAdd } from "../components/Input";
import { Profile } from "../components/Profile";
 

export default function Home() {

  const bg = useColorModeValue("gray.300", "gray.900")
  const color = useColorModeValue("purple.900", "purple.400")

  return (
    <Flex w="100%" h="100vh" bg="bg">
      <Box
        m="0 auto"
        mt="50px"
        align="center"
        borderRadius="20"
        justify="center"
        bg={bg}
        w="1000px"
        h="500px"
      >
        <Text 
          as="h1" 
          pos="relative"
          color={color} top="8"
          fontSize="30" 
          fontFamily="Otomanopee One"
            
          >
            Perfil Lucas Ezidro
          </Text>

          <Stack spacing="4">
            <Box
              display="flex"
              ml="4"

            >
              <Profile />

              </Box>
            </Stack>

            <Box>
              <InputAdd />
            </Box>

      </Box>

      <ButtonColorMode />
      <CreateAccount />

      
    </Flex>
  )
}
