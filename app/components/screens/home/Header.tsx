import React, { FC } from 'react';
import { HStack, Pressable, Spinner, Text } from 'native-base';
import AvatarProfile from '../../UI/AvatarProfile';
import { useNavigation } from '@react-navigation/native';
import { useProfile } from '../../../hooks/useProfile';

const Header: FC = () => {
  const { isLoading, name } = useProfile();
  const { navigate } = useNavigation();

  return isLoading ? (
    <Spinner />
  ) : (
    <HStack space={'14px'} alignItems={'center'}>
      <AvatarProfile />
      <Pressable onPress={() => navigate('Profile')}>
        <Text fontSize={'20px'} color={'white'} opacity={0.9}>
          Hello,{name}
        </Text>
      </Pressable>
    </HStack>
  );
};

export default Header;
