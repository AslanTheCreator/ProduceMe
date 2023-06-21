import { Box, Center, VStack } from 'native-base';
import React, { FC, createContext, useState } from 'react';
import MyButton from '../../UI/Button';
import Header from '../../UI/Header';
import { useNavigation } from '@react-navigation/native';

export const Welcome: FC = () => {
  const { navigate } = useNavigation();
  const [isReg, setIsReg] = useState(true);

  const loginHandler = () => {
    setIsReg(true);
    navigate('Auth', { isReg });
  };

  const registerHandler = () => {
    setIsReg(false);
    navigate('Auth', { isReg });
  };
  return (
    <Center w="100%" h="100%" bg={'coolGray.600'}>
      <Box safeArea mt="95px" alignItems={'center'}>
        <Header title="Welcome to ProduceMe" size={32} />
        <Box mt={26} maxW={287}>
          <Header
            title="Please login to your account or create new account to continue"
            size={16}
            opacity={0.7}
            isCenter
          />
        </Box>
        <VStack mt="80%" space="28px" minW={321}>
          <MyButton color="teal" title="Login" onPress={() => loginHandler()} />
          <MyButton
            onPress={() => registerHandler()}
            borderColor="teal.400"
            color="teal"
            variantColor="outline"
            title="Create Account"
          />
        </VStack>
      </Box>
    </Center>
  );
};
