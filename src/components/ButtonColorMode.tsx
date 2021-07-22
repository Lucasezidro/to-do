import { useColorMode, Button, Icon, Tooltip } from "@chakra-ui/react"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"


export function ButtonColorMode(){
    const { colorMode, toggleColorMode } = useColorMode()

    return(
      <Tooltip label={colorMode === "dark" ? "Light theme" : "Dark theme"}>
        <Button
          pos="absolute"
          left="10px"
          top="10px"
          onClick={toggleColorMode}
          opacity="0.8"
          color="purple.400"
          _hover={{opacity: "1"}}
        >
          { colorMode === "dark" ? <Icon as={SunIcon} /> : <Icon as={MoonIcon} /> }
        </Button>
      </Tooltip>
    )
}