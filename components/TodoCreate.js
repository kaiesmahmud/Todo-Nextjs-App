import React from 'react'

//Chakra UI
import { Box, Button, Flex, FormControl, Input, Stack, Text, useColorModeValue } from '@chakra-ui/react'

export const TodoCreate = ({setNote,setTodos,Todos,note}) => {
    const handleSubmit = (e)=>{
        e.preventDefault();
        setTodos([...Todos,{id:Date.now(),title:note, completed:false}])
        e.target.note.value = "";
        setNote("")
    }
    
  return (
    <Box
        w={['100%',,'60%']} 
        h={'auto'}
        padding="10px"
        textAlign={'center'}
        backgroundColor={'ghostwhite'}
        textColor={'black'}
        fontSize={'2rem'}
        backdropBlur={'2xl'}
        borderRadius={'10px'}
        fontWeight={'bold'}
        opacity={'0.9'}
        paddingBottom={'1em'}
    >
        <Flex
            direction={'column'}
            align={'center'}
            justify={'start'}
            >
           <Text
            fontWeight={'bold'}
            textAlign={'center'}
            fontSize={['lg',,'2rem']}
        >
            Add Notes
        </Text>
            <Stack
                direction={{ base: 'column', md: 'row' }}
                as={'form'}
                spacing={'12px'}
                w={'100%'}
                paddingX={'1em'}
                onSubmit={handleSubmit}
                >
                <FormControl>
                    <Flex
                    fontSize={['xs','sm','md']}
                        direction={['column','column','row']}
                        gap={'4'}
                        align={'center'}
                        >
                        <Input
                        onChange={(e)=>{setNote(e.target.value)}}
                        variant={'solid'}
                        borderWidth={1}
                        color={'gray.800'}
                        _placeholder={{
                            color: 'gray.400',
                        }}
                        borderColor={useColorModeValue('gray.300', 'gray.700')}
                        id={'note'}
                        type={'text'}
                        name={'note'}
                        required
                        placeholder={'Your Note'}
                        aria-label={'Your Note'}
                        />
                        <Button
                            minW={'100px'}
                            colorScheme={'green'}
                            w={'100px'}
                            type={'submit'}
                            fontSize={['xs','sm','md']}
                            >
                            Add Note
                        </Button>
                    </Flex>
                </FormControl>
            </Stack>
        </Flex>
    </Box>
  )
}
