import React, { FC } from 'react';
import { Box, VStack, Text, Pressable, Icon, Spacer, HStack, Heading, Spinner } from 'native-base';
import AvatarProfile from '../../UI/AvatarProfile';
import { useProfile } from '../../../hooks/useProfile';
import { Profile } from './ProfileItem/profile';
import ProfileItem from './ProfileItem/ProfileItem';
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import { useUpdateProfile } from '../../../hooks/useUpdateProfile';

const Content: FC = () => {
  const { navigate } = useNavigation();

  const { profile, name, photo, setPhoto, isLoading } = useProfile();
  const { updateProfile, isLoading: isUpdateLoading } = useUpdateProfile(
    profile.docId,
    name,
    photo,
  );

  const update = () => {
    openImagePicker();
    updateProfile();
  };

  // Функция для открытия галереи
  const openImagePicker = async () => {
    const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (permissionResult.granted === false) {
      console.log('Отказано в доступе к медиатеке');
      return;
    }

    const pickerResult = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!pickerResult.canceled) {
      const uri = pickerResult.assets;
      setPhoto(uri[0].uri);
    } else {
      console.log('Отменено пользователем');
    }
  };

  return (
    <Box mt={'20px'}>
      {isLoading ? (
        <Spinner color={'emerald.500'} />
      ) : (
        <VStack alignItems={'center'} space={'1'}>
          <Pressable onPress={update}>
            <AvatarProfile size="2xl" img={photo} />
          </Pressable>
          <Text color={'tertiary.500'} opacity={0.9} fontSize={'30px'} fontWeight={'bold'}>
            {name}
          </Text>
        </VStack>
      )}
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
