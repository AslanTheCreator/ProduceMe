import React, { FC } from 'react';
import { Box, HStack, Icon, Text, VStack, Divider, Heading, View } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { ISport } from '../sport/types';

interface IContent {
  items: ISport;
}

const Content: FC<IContent> = ({ items }) => {
  return (
    <Box>
      <Text color={'white'} mt={'20px'}>
        {items.description}
      </Text>
      <VStack mt={'40px'}>
        <HStack space={'20px'} alignItems={'center'}>
          <Icon as={<AntDesign name="clockcircleo" />} size={'3xl'} color={'white'} />
          <Text color={'white'}>Среднее время: {items.time}</Text>
        </HStack>
        <Divider my={3} bg={'white'} opacity={0.5} />
        <HStack space={'20px'} alignItems={'center'}>
          <Icon as={<AntDesign name="barschart" />} size={'3xl'} color={'white'} />
          <Text color={'white'}>{items.level}</Text>
        </HStack>
        <Divider my={3} bg={'white'} opacity={0.5} />
        <HStack space={'20px'} alignItems={'center'}>
          <Icon as={<AntDesign name="user" />} size={'3xl'} color={'white'} />
          <Text color={'white'}>{items.keyWords}</Text>
        </HStack>
        <Divider my={3} bg={'white'} opacity={0.5} />
      </VStack>
      <Heading color={'white'}>Подход 1 из 3</Heading>
      <Text color={'white'} mt={'20px'}>
        Отжимания от пола: Начните в положении планки, с руками чуть шире плеч. Понизьте себя,
        сгибая руки, пока грудь почти не коснется пола. Затем медленно поднимитесь обратно в
        исходное положение, разгибая руки. Выполните 3-4 подхода по 10-15 повторений.
      </Text>
      <Text color={'white'} mt={'20px'}>
        Скручивания (косые пресс): Лягте на спину с ногами согнутыми в коленях. Поднимите верхнюю
        часть тела, приподнимая плечи и прокручивая туловище в сторону противоположного колена.
        Затем медленно опуститесь обратно на пол и повторите упражнение на другую сторону. Выполните
        3-4 подхода по 10-15 повторений на каждую сторону.
      </Text>
      <Text color={'white'} mt={'20px'}>
        Армейские отжимания: Встаньте в положение отжимания, с руками чуть шире плеч. Сгибайте руки,
        опуская верхнюю часть тела к полу, как при обычных отжиманиях. Затем приподнимите себя,
        одновременно разводя руки в стороны, чтобы создать форму буквы "Т". Медленно вернитесь в
        исходное положение и повторите. Выполните 3-4 подхода по 8-10 повторений.
      </Text>
    </Box>
  );
};

export default Content;
