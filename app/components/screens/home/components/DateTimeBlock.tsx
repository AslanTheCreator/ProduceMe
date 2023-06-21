import { HStack, VStack, Text, Icon } from 'native-base';
import React, { FC, useEffect, useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import Block from '../../../UI/Block';

const TimeBlock: FC = () => {
  const [currentTime, setCurrentTime] = useState('');

  const getCurrentTime = () => {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  };

  const getCurrentDate = () => {
    const months = [
      'января',
      'февраля',
      'марта',
      'апреля',
      'мая',
      'июня',
      'июля',
      'августа',
      'сентября',
      'октября',
      'ноября',
      'декабря',
    ];

    const now = new Date();
    const day = now.getDate().toString();
    const monthIndex = now.getMonth();
    const year = now.getFullYear().toString();

    const formattedDate = `${day} ${months[monthIndex]} ${year}`;
    return formattedDate;
  };

  const currentDate = getCurrentDate();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getCurrentTime());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <Block height="150px" colorHeading={'teal.500'} contentHeading={'Такс такс такс'}>
      <HStack space={'35px'}>
        <VStack space={'10px'}>
          <Text color={'white'} opacity={0.9}>
            На часах у нас
          </Text>
          <HStack space={'10px'} alignItems={'center'}>
            <Icon as={<AntDesign name="clockcircleo" />} color={'white'} size={'xl'} />
            <Text color={'white'} opacity={0.9} fontSize={'20px'}>
              {currentTime}
            </Text>
          </HStack>
        </VStack>
        <VStack space={'10px'}>
          <Text color={'white'} opacity={0.9}>
            А сегодня у нас
          </Text>
          <HStack space={'10px'} alignItems={'center'}>
            <Icon as={<AntDesign name="calendar" />} color={'white'} size={'xl'} />
            <Text color={'white'} opacity={0.9} fontSize={'20px'}>
              {currentDate}
            </Text>
          </HStack>
        </VStack>
      </HStack>
    </Block>
  );
};

export default TimeBlock;
