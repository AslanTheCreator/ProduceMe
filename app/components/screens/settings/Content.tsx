import React from 'react';
import { Box, Center, VStack } from 'native-base';
import MyButton from '../../UI/Button';
import { useAuth } from '../../../hooks/useAuth';

const Content = () => {
  const { logout } = useAuth();
  return (
    <Box mt={'20px'}>
      <VStack>
        <MyButton
          borderColor="teal.400"
          title="Logout"
          color="teal"
          variantColor="outline"
          onPress={logout}
        />
      </VStack>
    </Box>
  );
};

export default Content;
