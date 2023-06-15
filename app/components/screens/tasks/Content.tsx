import React, { FC, useState } from 'react';
import {
  Text,
  Box,
  Center,
  Icon,
  IconButton,
  VStack,
  Modal,
  Button,
  useToast,
  FlatList,
} from 'native-base';
import { Task } from './TaskItem/task';
import TaskItem from './TaskItem/TaskItem';
import { AntDesign } from '@expo/vector-icons';
import Field from '../../UI/Field';

const Content: FC = () => {
  const [showModal, setShowModal] = useState(false);
  const [task, setTask] = useState(Task);
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('');
  const [time, setTime] = useState('');

  const toast = useToast();

  const addTask = (desc: string, status: string, time: string) => {
    if (desc === '') {
      toast.show({
        title: 'Please Enter Text',
      });
      return;
    }

    setTask((prev) => {
      return [
        ...prev,
        {
          desc: desc,
          time: time,
          status: status,
        },
      ];
    });

    setTitle('');
    setStatus('');
    setTime('');
    setShowModal(false);
  };

  return (
    <Box mt={'50px'}>
      <VStack space={'20px'}>
        <FlatList
          data={task}
          renderItem={({ item }) => <TaskItem items={item} key={item.desc} />}
        />
      </VStack>
      <Center mt={'50px'}>
        <IconButton
          onPress={() => setShowModal(true)}
          borderRadius={'full'}
          colorScheme={'teal'}
          variant={'solid'}
          p={'20px'}
          icon={<Icon as={AntDesign} name="plus" color={'white'} />}
        />
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
              <Text color={'muted.300'}>Add Task</Text>
            </Modal.Header>
            <Modal.Body>
              <VStack space={2}>
                <Field
                  backgroundColor="coolGray.400"
                  value={title}
                  label="Desc"
                  onChange={(v) => setTitle(v)}
                />
                <Field
                  backgroundColor="coolGray.400"
                  value={status}
                  label="Status"
                  onChange={(v) => setStatus(v)}
                />
                <Field
                  backgroundColor="coolGray.400"
                  value={time}
                  label="Time"
                  onChange={(v) => setTime(v)}
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
                <Button colorScheme={'teal'} onPress={() => addTask(title, status, time)}>
                  Save
                </Button>
              </Button.Group>
            </Modal.Footer>
          </Modal.Content>
        </Modal>
      </Center>
    </Box>
  );
};

export default Content;
