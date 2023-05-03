import { Box, Heading, VStack, Text } from 'native-base';
import React, { FC } from 'react';
import { IInfo } from './info';

interface IInformation {
  items: IInfo;
}

const Information: FC<IInformation> = ({ items }) => {
  return (
    <Box rounded={'10px'} bg={'coolGray.400'} minH={'150px'}>
      <VStack p={'20px'}>
        <Heading mb={'10px'} color={'teal.600'}>
          {items.title}
        </Heading>
        <Text>{items.content}</Text>
      </VStack>
    </Box>
  );
};

export default Information;
