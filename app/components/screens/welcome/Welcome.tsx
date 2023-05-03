import { View, Text, Box, Heading, Center, VStack } from 'native-base';
import React, { FC } from 'react';
import MyButton from '../../UI/Button';
import { NavigationProp, ParamListBase } from '@react-navigation/native';

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
        <Heading fontSize={32} color={'white'} opacity={0.9} textAlign={'center'}>
          Welcome to ProduceMe
        </Heading>
        <Box mt={26} maxW={287}>
          <Heading textAlign={'center'} fontSize={16} color={'white'} opacity={0.7}>
            Please login to your account or create new account to continue
          </Heading>
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
