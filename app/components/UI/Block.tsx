import { Box, Heading, VStack } from 'native-base';
import { ColorType } from 'native-base/lib/typescript/components/types';
import React, { FC } from 'react';

interface IBlock {
  children: React.ReactNode;
  height: string;
  colorHeading: ColorType;
  contentHeading: string | null;
  margin?: string;
}

const Block: FC<IBlock> = ({ children, height, colorHeading, contentHeading, margin }) => {
  return (
    <Box rounded={'15px'} bg={'coolGray.400'} minH={height} mb={margin}>
      <VStack p={'20px'}>
        <Heading mb={'10px'} color={colorHeading}>
          {contentHeading}
        </Heading>
        {children}
      </VStack>
    </Box>
  );
};

export default Block;
