import { Box, VStack, Heading, Text, Spinner } from 'native-base';
import React, { FC } from 'react';
import { useFacts } from './useFacts';
import TimeBlock from './TimeBlock';

const Content: FC = () => {
  const { facts, isLoading } = useFacts();

  return (
    <Box mt={'52px'}>
      <VStack space={'20px'}>
        <TimeBlock />
        {isLoading ? (
          <Spinner />
        ) : (
          <Box rounded={'10px'} bg={'coolGray.400'} minH={'150px'}>
            <VStack p={'20px'}>
              <Heading mb={'10px'} color={'teal.600'}>
                {facts && facts.title}
              </Heading>
              {facts && <Text>{facts.content[0]}</Text>}
            </VStack>
          </Box>
        )}
      </VStack>
    </Box>
  );
};

export default Content;
