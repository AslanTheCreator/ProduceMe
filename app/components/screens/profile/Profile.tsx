import React, { FC } from 'react';
import { Layout } from '../../layout/Layout';
import { useProfile } from '../../../hooks/useProfile';
import { Heading, Spinner, VStack, useToast } from 'native-base';
import Field from '../../UI/Field';
import MyButton from '../../UI/Button';
import { useAuth } from '../../../hooks/useAuth';
import { useUpdateProfile } from '../../../hooks/useUpdateProfile';
import Header from '../../UI/Header';

const Profile: FC = () => {
  const { logout } = useAuth();

  const { isLoading: isProfileLoading, name, setName, profile } = useProfile();
  const { isLoading, updateProfile, isSuccess } = useUpdateProfile(name, profile.docId);

  const toast = useToast();

  return (
    <Layout>
      <Header title="Profile" />
      {isSuccess &&
        toast.show({
          title: 'Success',
        })}
      {isProfileLoading || isLoading ? (
        <Spinner />
      ) : (
        <VStack space={10} mt={'10'}>
          <Field value={name} onChange={setName} placeholder="Enter Name" />
          <MyButton title="Update profile" color="teal" onPress={updateProfile} />
          <MyButton
            title="Logout"
            onPress={logout}
            borderColor="teal.400"
            color="teal"
            variantColor="outline"
          />
        </VStack>
      )}
    </Layout>
  );
};

export default Profile;
