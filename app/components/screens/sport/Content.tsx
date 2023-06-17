import { Box, VStack } from 'native-base';
import React, { FC } from 'react';
import Header from '../../UI/Header';
import SportItem from './SportItem';
import { useSport } from './useSport';

const Content: FC = () => {
  const { sport } = useSport();
  return (
    <Box>
      <Header title="Sport" />
      <VStack space={'15px'} mt={10}>
        {sport.map((item) => (
          <SportItem key={item.title} items={item} />
        ))}
      </VStack>
    </Box>
  );
};

export default Content;
