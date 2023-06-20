import { Box, HStack, Heading, VStack, Text, Icon, Spacer } from 'native-base';
import React, { FC } from 'react';
import { AntDesign } from '@expo/vector-icons';

const TimeBlock: FC = () => {
  return (
    <Box rounded={'10px'} bg={'coolGray.400'} minH={'150px'}>
      <VStack p={'20px'}>
        <Heading mb={'10px'} color={'teal.600'}>
          Такс такс такс
        </Heading>
        <HStack space={'20px'}>
          <VStack>
            <Text>На часах у нас</Text>
            <Icon as={<AntDesign name="clockcircleo" />} color={'white'} size={'md'} />
          </VStack>
          <VStack>
            <Text>А сегодня у нас</Text>
            <Icon as={<AntDesign name="calendar" />} color={'white'} size={'md'} />
          </VStack>
        </HStack>
      </VStack>
    </Box>
  );
};

export default TimeBlock;
