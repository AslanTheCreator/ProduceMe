import React, { FC } from 'react';
import { Box, Heading, VStack, Text, Image, Center } from 'native-base';
import MyButton from '../../UI/Button';

const Content: FC = () => {
  let seconds = 3600000;
  const timerStart = () => {
    setInterval(() => {
      let minute = Math.floor((seconds / 60) % 60);
      let sec = Math.floor(seconds % 60);
      seconds--;
    }, 1000);
  };
  return (
    <Box mt={'52px'}>
      <VStack alignItems={'center'} space={'26px'} mb={'10px'}>
        <VStack alignItems={'center'}>
          <Heading color={'white'} fontSize={'35px'}>
            Meditation
          </Heading>
          <Text textAlign={'center'} color={'white'} opacity={0.5} fontSize={20}>
            Guided by a short introductory course, start trying meditation.
          </Text>
        </VStack>
        <Image
          justifyContent={'center'}
          alt="meditation"
          source={require('../../../../assets/img/meditating.png')}
          size={'2xl'}
          w={'333px'}
        />
        <Text fontSize={'38px'} color={'white'}>
          45:00
        </Text>
      </VStack>
      <Center>
        <MyButton title="Start now" color="teal" width={186} onPress={() => timerStart()} />
      </Center>
    </Box>
  );
};

export default Content;
