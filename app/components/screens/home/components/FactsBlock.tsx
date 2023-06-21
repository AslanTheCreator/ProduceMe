import { Text } from 'native-base';
import React from 'react';
import { useFacts } from './hooks/useFacts';
import Block from '../../../UI/Block';

const FactsBlock = () => {
  const { facts } = useFacts();

  const getRandomInt = (max: number) => {
    return Math.floor(Math.random() * max);
  };

  return (
    <Block height="150px" colorHeading={'teal.500'} contentHeading={facts && facts.title}>
      {facts && (
        <Text color={'white'} opacity={0.9}>
          {facts.content[getRandomInt(facts.content.length)]}
        </Text>
      )}
    </Block>
  );
};

export default FactsBlock;
