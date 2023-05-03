import React, { FC } from 'react';
import { Box, Center, Icon, IconButton, VStack } from 'native-base';
import { Task } from './TaskItem/task';
import TaskItem from './TaskItem/TaskItem';
import { AntDesign } from '@expo/vector-icons';

const Content: FC = () => {
  return (
    <Box mt={'50px'}>
      <VStack space={'20px'}>
        {Task.map((task) => (
          <TaskItem key={task.title} items={task} />
        ))}
      </VStack>
      <Center justifyContent={'flex-end'}>
        <IconButton
          onPress={() => null}
          borderRadius={'full'}
          colorScheme={'teal'}
          variant={'solid'}
          p={'20px'}
          icon={<Icon as={AntDesign} name="plus" color={'white'} />}
        />
      </Center>
    </Box>
  );
};

export default Content;
