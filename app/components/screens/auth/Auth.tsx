import React, { FC, useState } from 'react';
import { Box, Center, HStack, Heading, VStack, Text, Spinner, Pressable } from 'native-base';
import MyButton from '../../UI/Button';
import { useAuth } from '../../../hooks/useAuth';
import Field from '../../UI/Field';

interface IData {
  email: string;
  password: string;
}

const Auth: FC = () => {
  const { isLoading, register, login } = useAuth();

  const [isReg, setIsReg] = useState(false);

  const [data, setData] = useState<IData>({} as IData);

  const authHandler = async () => {
    const { email, password } = data;
    if (!isReg) await register(email, password);
    else await login(email, password);

    setData({} as IData);
  };

  return (
    <Center w="100%" h="100%" bg={'coolGray.600'}>
      <Box safeArea w="90%" mt="78px">
        <Heading fontSize={32} color={'white'} opacity={0.9}>
          {isReg ? 'Login' : 'Register'}
        </Heading>
        {isLoading ? (
          <Spinner />
        ) : (
          <VStack space="69px" mt="53px">
            <VStack space="25px">
              <Field
                label="Username"
                placeholder="Enter email"
                value={data.email}
                onChange={(value) => setData({ ...data, email: value })}
              />
              <Field
                label="Password"
                placeholder="Enter password"
                typeInput="password"
                value={data.password}
                onChange={(value) => setData({ ...data, password: value })}
              />
            </VStack>
            <VStack space="233px">
              <MyButton color="teal" title={isReg ? 'Login' : 'Register'} onPress={authHandler} />
              <HStack justifyContent="center">
                <Text fontSize="12px" color={'coolGray.200'} opacity={0.9}>
                  Don’t have an account?{' '}
                </Text>
                <Pressable onPress={() => setIsReg(!isReg)}>
                  <Text fontSize="12px" color={'white'} opacity={0.9}>
                    {isReg ? 'Register' : 'Login'}
                  </Text>
                </Pressable>
              </HStack>
            </VStack>
          </VStack>
        )}
      </Box>
    </Center>
  );
};

export default Auth;
