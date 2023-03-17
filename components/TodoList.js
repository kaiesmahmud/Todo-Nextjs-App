import React from 'react'
//Chakra UI 
import { Badge, Box, Button, Flex, Text } from '@chakra-ui/react'

const TodoList = ({Todos,handleToggle,handleClearCompleted}) => {
    
  return (
    <Box
        w={['100%',,'60%']}
        padding="10px"
        paddingX={'20px'}
        backgroundColor={'ghostwhite'}
        textColor={'black'}
        backdropBlur={'2xl'}
        borderRadius={'10px'}
        
        opacity={'0.8'}
    >
        <Text
            fontWeight={'bold'}
            textAlign={'center'}
            fontSize={['lg',,'2rem']}
        >
            My Notes({Todos.length})
        </Text>
        <hr />
        {
            Todos.map((todo,i)=>(
                <Flex 
                w={'100%'}
                align={'center'}
                justify={'space-between'}
                key={i}
                paddingY={'10px'}
                wrap={'wrap'}
                bg={todo.completed?'green.50':'red.50'}
                px={'1rem'}
                m={"5px"}
                shadow={'base'}
                borderRadius={'10px'}
                >
                
                    <Text textTransform={'capitalize'} >{todo.title} </Text>
                   
                    <Badge fontSize={'xs'} colorScheme={todo.completed?'green':'red'}>{todo.completed?'Completed':'Incomplete'}</Badge>
                    <Button
                    fontSize={['xs','sm','md']}
                        colorScheme={todo.completed?'red':'green'}
                        onClick={()=>{handleToggle(todo.id)}}
                    >
                        {
                            todo.completed?'Mark Incomplete':'Mark Complete'
                        
                        }
                    </Button>
                </Flex>
            ))
        }
        {
            !Todos.length && <div>Empty notes</div>
        }
        <Button
        fontSize={['xs','sm','md']}
            colorScheme={'orange'}
            padding={'20px'}
            onClick={handleClearCompleted}
        >Clear All Completed</Button>
    </Box>
  )
}

export default TodoList