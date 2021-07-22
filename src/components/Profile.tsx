import { Avatar, Tag, TagLabel } from "@chakra-ui/react";


export function Profile(){
    return(
        <Tag size="lg" colorScheme="purple" borderRadius="full">
          <Avatar
            src="https://avatars.githubusercontent.com/u/80000943?v=4"
            size="xs"
            name="Lucas Ezidro"
            ml={-1}
            mr={2}
          />
          <TagLabel>ezidropics</TagLabel>

        </Tag>
    )
}