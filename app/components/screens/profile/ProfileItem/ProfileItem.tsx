import React, { FC, useState } from 'react';
import { VStack, Text, Pressable, Icon, Spacer, HStack, Button, Modal, Box } from 'native-base';
import { AntDesign } from '@expo/vector-icons';
import { IProfile } from './profile';
import Field from '../../../UI/Field';
import { useUpdateProfile } from '../../../../hooks/useUpdateProfile';
import { useProfile } from '../../../../hooks/useProfile';

interface IProfileItem {
  items: IProfile;
}

const ProfileItem: FC<IProfileItem> = ({ items }) => {
  const [showModal, setShowModal] = useState(false);
  const { name, setName, profile } = useProfile();
  const { updateProfile } = useUpdateProfile(name, profile.docId);

  const update = () => {
    updateProfile();
    setShowModal(false);
  };

  return (
    <Box>
      <Pressable onPress={() => setShowModal(true)}>
        <HStack space={'10px'}>
          <Icon size={'md'} as={<AntDesign name={items.icon} />} color={'white'} />
          <Text color={'white'} opacity={0.9}>
            {items.textProfile}
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
      <Modal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        _backdrop={{
          _dark: {
            bg: 'coolGray.800',
          },
          bg: 'black',
        }}>
        <Modal.Content maxWidth="400px" bg={'coolGray.400'}>
          <Modal.CloseButton />
          <Modal.Header bg={'coolGray.400'}>
            <Text color={'muted.300'}>Change account name</Text>
          </Modal.Header>
          <Modal.Body>
            <VStack space={2}>
              <Field
                backgroundColor="coolGray.400"
                value={name}
                label="Desc"
                onChange={(v) => setName(v)}
              />
            </VStack>
          </Modal.Body>
          <Modal.Footer bg={'coolGray.400'}>
            <Button.Group space={2}>
              <Button
                variant="ghost"
                colorScheme="blueGray"
                onPress={() => {
                  setShowModal(false);
                }}>
                Cancel
              </Button>
              <Button colorScheme={'teal'} onPress={() => update()}>
                Save
              </Button>
            </Button.Group>
          </Modal.Footer>
        </Modal.Content>
      </Modal>
    </Box>
  );
};

export default ProfileItem;
