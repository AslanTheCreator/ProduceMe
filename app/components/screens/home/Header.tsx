import React, { FC, useEffect } from 'react';
import { HStack, Pressable, Spinner, Text } from 'native-base';
import AvatarProfile from '../../UI/AvatarProfile';
import { useNavigation } from '@react-navigation/native';
import { useProfile } from '../../../hooks/useProfile';

const Header: FC = () => {
  const { isLoading, name, profile } = useProfile();
  const { navigate } = useNavigation();

  return isLoading ? (
    <Spinner />
  ) : (
    <HStack space={'14px'} alignItems={'center'}>
      <AvatarProfile size="md" img={profile.avatar} />
      <Pressable onPress={() => navigate('Profile')}>
        <Text fontSize={'20px'} color={'white'} opacity={0.9}>
          Hello {profile.displayName}
        </Text>
      </Pressable>
    </HStack>
  );
};

export default Header;
