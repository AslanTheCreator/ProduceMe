import { Box, VStack } from 'native-base';
import React, { FC } from 'react';
import Information from './information/Information';
import { Info } from './information/info';

const Content: FC = () => {
  return (
    <Box mt={'52px'}>
      <VStack space={'20px'}>
        {Info.map((info) => (
          <Information key={info.title} items={info} />
        ))}
      </VStack>
    </Box>
  );
};

export default Content;
