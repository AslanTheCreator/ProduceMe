import { Box, Center, VStack } from 'native-base';
import React, { FC } from 'react';
import MyButton from '../../UI/Button';
import { NavigationProp, ParamListBase } from '@react-navigation/native';
import Header from '../../UI/Header';

interface IWelcome {
  navigation: NavigationProp<ParamListBase>;
}

export const Welcome: FC<IWelcome> = ({ navigation }) => {
  const loginHandler = () => {
    navigation.navigate('Auth');
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
            onPress={() => loginHandler()}
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
