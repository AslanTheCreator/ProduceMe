import React, { FC, useState, useRef } from 'react';
import { Box, VStack, Text, Image, Center } from 'native-base';
import MyButton from '../../UI/Button';
import Header from '../../UI/Header';

const Content: FC = () => {
  const [minutes, setMinutes] = useState(15);
  const [seconds, setSeconds] = useState('00');

  const interval = useRef(0);

  const [isActive, setIsActive] = useState(false);

  let sec = 900_000;

  const timerStart = () => {
    timing();
    setIsActive(!isActive);
  };

  const timing = () => {
    if (!isActive) {
      interval.current = window.setInterval(() => {
        setMinutes(Math.floor((sec / (1000 * 60)) % 60));
        setSeconds(String(Math.floor((sec / 1000) % 60)));
        sec -= 1000;
      }, 1000);
    } else {
      clearInterval(interval.current);
    }
  };
  return (
    <Box mt={'52px'}>
      <VStack alignItems={'center'} space={'26px'} mb={'10px'}>
        <VStack alignItems={'center'}>
          <Header title="Meditation" />
          <Text textAlign={'center'} color={'white'} opacity={0.5} fontSize={20}>
            Guided by a short introductory course, start trying meditation.
          </Text>
        </VStack>
        <Image
          justifyContent={'center'}
          alt="meditation"
          source={require('../../../../assets/img/meditation/meditating.png')}
          size={'2xl'}
          w={'333px'}
        />
        <Text fontSize={'38px'} color={'white'}>
          {minutes}:{seconds}
        </Text>
      </VStack>
      <Center>
        <MyButton
          title={isActive ? 'Pause' : 'Start now'}
          color="teal"
          width={186}
          onPress={timerStart}
        />
      </Center>
    </Box>
  );
};

export default Content;
