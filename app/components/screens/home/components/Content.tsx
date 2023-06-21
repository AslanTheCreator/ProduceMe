import { Box, VStack, Spinner } from 'native-base';
import React, { FC } from 'react';
import { useFacts } from './hooks/useFacts';
import DateTimeBlock from './DateTimeBlock';
import FactsBlock from './FactsBlock';

const Content: FC = () => {
  const { isLoading } = useFacts();

  return (
    <Box mt={'52px'}>
      <VStack space={'20px'}>
        <DateTimeBlock />
        {isLoading ? <Spinner color={'emerald.500'} /> : <FactsBlock />}
      </VStack>
    </Box>
  );
};

export default Content;
