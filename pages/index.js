import Head from 'next/head'
// import { ClockC } from '@/components/ClockC'
import { Flex } from '@chakra-ui/react'
import { Todos } from '@/components/Todos'


export default function Home() {
  return (
    <>
      <Head>
        <title>Todo-App-Nextjs</title>
        <meta name="description" content="Todo App created using Nextjs(a reactjs framework) by Kaies Mahmud Nehal" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main >
        <Flex 
        w="100%" 
        paddingTop={'3rem'}
        paddingX={'2rem'}
        h={'100%'}
        minHeight={'100vh'} 
        backgroundColor={'gray.500'}
        direction={'column'}
        gap='4'
        align={'center'}
        justify={'start'}
        >
          {/* <ClockC/> */}
          
          <Todos/>
        </Flex>
      </main>
    </>
  )
}
