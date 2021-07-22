import { AddIcon, DeleteIcon } from "@chakra-ui/icons";
import { Box, Flex, IconButton, Input, Text, useColorModeValue } from "@chakra-ui/react";
import { useState } from "react";
import Lottie from 'react-lottie'
import animationData from './animation.json'  


interface TodoItemProps {
    id: number;
    value: string;
  }
  
let count = 1

export function InputAdd(){
    const [like, setLike] = useState(false)
    const [animationState, setAnimationState] = useState({
        isStopped: true, isPaused: false,
        direction: -1,
    })


    const [post, setPost] = useState<TodoItemProps[]>([{id: 0, value: ''}])
    
    function handleChange(value: string, id: TodoItemProps['id']){
      setPost(prev => prev.map(item => item.id === id ? {...item, value} : item))
    }
  
    function handleDelete(id: TodoItemProps['id']){
      setPost(prev => prev.filter(item => item.id !== id))
    }
  
    function handleAdd(index: number){
      const newPost = { id: count++, value: "" }
      setPost(prev => [...prev.slice(0, index + 1), newPost, ...prev.slice(index + 1)])
    }

    const bgInput = useColorModeValue("gray.400", "gray.800")
    const placeholder = useColorModeValue("gray.600", "gray.600")
    const hoverPlacehoder = useColorModeValue("gray.500", "gray.900")
    const color = useColorModeValue("purple.900", "purple.400")


    const defaultOptions = { 
        loop: false,
        autoplay: false,
        animationData: animationData,
        rendererSettings: {
            preserveAspectRatio: 'xMidYMid slice'
        }
    }

    return(
        <Flex flexDir="column">
        {post.map((item, index) => (
          <Flex as="form" key={item.id} >
            <Input
               w="500px"
               ml= "250"
               mt="4"
               diplay="block"
               borderRadius="50"
               variant="filled"
               size="lg"
               bg={bgInput}
               placeholder="Hi Lucas, what do you want to do today?"
               _placeholder={{
                 color: placeholder
               }}
               _hover={{bg: hoverPlacehoder}}         
                value={item.value}
                onChange={e => handleChange(e.currentTarget.value, item.id)}

            />

            <IconButton
              aria-label="add icon"
              diplay="block"
              ml="4"
              mt="4"
              icon={<AddIcon />}
              onClick={() => handleAdd(index)}
            />

            <Text
                fontSize="13"
                pos="absolute"
                mt="60px"
                right="386"
                color={color}
            >Add</Text>

            {post.length > 1 && (
            <>
              <IconButton
              aria-label="add icon"
              diplay="block"
              ml="4"
              mt="4"
              icon={<DeleteIcon />}
              onClick={() => handleDelete(item.id)}
            />

            <Text
                fontSize="13"
                pos="absolute"
                mt="60px"
                right="80"
                color={color}
            >
              Delete
            </Text>
            </>
            )}

            <Box>

            <IconButton
              aria-label="add icon"
              diplay="block"
              ml="4"
              mt="4"
              onClick={() => {
                const reverseAnimation = -1;
                const normalAnimation = 1;

                  setAnimationState({
                      ...animationState,
                      isStopped: false,
                      direction: animationState.direction === normalAnimation
                      ? reverseAnimation : normalAnimation
                  })
                  {setLike(!like)}
              }}
            >
                <Lottie 
                    options={defaultOptions}
                    height={100}
                    width={40}
                    direction={animationState.direction}
                    isStopped={animationState.isStopped}
                    isPaused={animationState.isPaused}

                />
            </IconButton>     

            <Text
                fontSize="13"
                ml="4"
                mt="1"
                color={color}
            >
                {like ? "You Liked" : "Like"}
            </Text>

            </Box>

          </Flex>
        ))}
      </Flex>
    )
}