import React from 'react';
import { HStack, Text } from 'native-base';
import AvatarProfile from '../../UI/AvatarProfile';

const Header = () => {
  return (
    <HStack space={'14px'} alignItems={'center'}>
      <AvatarProfile />
      <Text fontSize={'20px'} color={'white'} opacity={0.9}>
        Hello,Aslan!
      </Text>
    </HStack>
  );
};

export default Header;
