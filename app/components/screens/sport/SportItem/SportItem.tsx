import React, { FC } from 'react';
import { Box, Divider, Flex, Heading, Pressable, Text, VStack } from 'native-base';
import { ISport } from './sport';
import { ImageBackground } from 'react-native';

interface ISportItem {
  items: ISport;
}

const SportItem: FC<ISportItem> = ({ items }) => {
  return (
    <Pressable>
      <ImageBackground imageStyle={{ borderRadius: 25 }} resizeMode="cover" source={items.img}>
        <Box rounded={'10px'} minH={'150px'}>
          <VStack p={'20px'} pt={'90px'}>
            <Heading mb={'7px'} color={'white'}>
              {items.title}
            </Heading>
            <Flex direction="row">
              <Text color={'white'}>{items.time}</Text>
              <Divider thickness="2" mx="2" bg={'coolGray.400'} orientation="vertical" />
              <Text color={'white'}>{items.level}</Text>
            </Flex>
          </VStack>
        </Box>
      </ImageBackground>
    </Pressable>
  );
};

export default SportItem;
