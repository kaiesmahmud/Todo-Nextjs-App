import { Box,Text } from '@chakra-ui/react';
import React from 'react'
import Clock from 'react-live-clock';

export const ClockC = () => {
  return (
    <Box 
      w={'100%'} 
      padding="10px"
      textAlign={'center'}
      backgroundColor={'ghostwhite'}
      textColor={'black'}
      fontSize={'2rem'}
      backdropBlur={'2xl'}
      borderRadius={'10px'}
      fontWeight={'bold'}
      opacity={'0.8'}
    >
      <Text
        fontSize={'2rem'}
        fontWeight={'thin'}
      >
        Live Clock(Bangladesh)
      </Text>
      <Clock format={'hh:mm:ssA'} ticking={true} timezone={'Asia/Dhaka'} />
    </Box>
  )
}
