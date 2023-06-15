import React, { FC } from 'react';
import { Box, VStack, Text, Pressable, Icon, Spacer, HStack, Heading } from 'native-base';
import AvatarProfile from '../../UI/AvatarProfile';
import { useProfile } from '../../../hooks/useProfile';
import { Profile } from './ProfileItem/profile';
import ProfileItem from './ProfileItem/ProfileItem';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Content: FC = () => {
  const { profile } = useProfile();
  const { navigate } = useNavigation();

  return (
    <Box mt={'20px'}>
      <VStack alignItems={'center'} space={'1'}>
        <AvatarProfile size="2xl" />
        <Text color={'tertiary.500'} opacity={0.9} fontSize={'30px'} fontWeight={'bold'}>
          {profile.displayName}
        </Text>
      </VStack>
      <VStack mt={'20px'} space={'10px'}>
        <Heading color={'white'} opacity={0.5} size={'xs'}>
          Settings
        </Heading>
        <Pressable onPress={() => navigate('Settings')}>
          <HStack space={'10px'}>
            <Icon size={'md'} as={<AntDesign name="setting" />} color={'white'} />
            <Text color={'white'} opacity={0.9}>
              App Settings
            </Text>
            <Spacer />
            <Icon
              justifyContent={'flex-end'}
              size={'md'}
              as={<AntDesign name="right" />}
              color={'white'}
            />
          </HStack>
        </Pressable>
      </VStack>
      <VStack mt={'20px'} space={'20px'}>
        <Heading color={'white'} opacity={0.5} size={'xs'}>
          Account
        </Heading>
        {Profile.map((item) => (
          <ProfileItem key={item.textProfile} items={item} />
        ))}
      </VStack>
    </Box>
  );
};

export default Content;
