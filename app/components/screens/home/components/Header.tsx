import React, { FC } from 'react';
import { HStack, Pressable, Spinner, Text } from 'native-base';
import AvatarProfile from '../../../UI/AvatarProfile';
import { useNavigation } from '@react-navigation/native';
import { useProfile } from '../../../../hooks/useProfile';

const Header: FC = () => {
  const { isLoading, name, photo } = useProfile();
  const { navigate } = useNavigation();

  return isLoading ? (
    <Spinner color={'emerald.500'} />
  ) : (
    <HStack space={'14px'} alignItems={'center'}>
      <AvatarProfile size="md" img={photo} />
      <Pressable onPress={() => navigate('Profile')}>
        <Text fontSize={'20px'} color={'white'} opacity={0.9}>
          Hello {name}
        </Text>
      </Pressable>
    </HStack>
  );
};

export default Header;
