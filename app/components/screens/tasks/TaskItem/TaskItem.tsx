import { Pressable, Box, VStack, Heading } from 'native-base';
import React, { FC } from 'react';
import { ITask } from './task';

interface ITaskItem {
  items: ITask;
}

const TaskItem: FC<ITaskItem> = ({ items }) => {
  return (
    <Pressable>
      <Box rounded={'10px'} bg={'coolGray.400'} minH={'100px'}>
        <VStack p={'20px'}>
          <Heading>{items.title}</Heading>
        </VStack>
      </Box>
    </Pressable>
  );
};

export default TaskItem;
