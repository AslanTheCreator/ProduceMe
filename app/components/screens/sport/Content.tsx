import { Box, VStack } from 'native-base';
import React, { FC } from 'react';
import Header from '../../UI/Header';
import { Sport } from './SportItem/sport';
import SportItem from './SportItem/SportItem';

const Content: FC = () => {
  return (
    <Box>
      <Header title="Sport" />
      <VStack space={'15px'} mt={10}>
        {Sport.map((item) => (
          <SportItem key={item.title} items={item} />
        ))}
      </VStack>
    </Box>
  );
};

export default Content;
