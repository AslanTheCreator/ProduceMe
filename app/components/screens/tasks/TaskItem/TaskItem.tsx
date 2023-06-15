import { Pressable, Box, VStack, Heading, Text, Flex, Spacer } from 'native-base';
import React, { FC } from 'react';
import { ITask } from './task';

interface ITaskItem {
  items: ITask;
}

const TaskItem: FC<ITaskItem> = ({ items }) => {
  return (
    <Pressable>
      <Box rounded={'10px'} bg={'coolGray.400'} minH={'100px'} mb={'20px'}>
        <VStack p={'20px'}>
          <Heading color={'muted.300'}>{items.desc}</Heading>
          <Flex direction="row" mt={'10px'}>
            <Text color={'teal.400'}>{items.time}</Text>
            <Spacer />
            <Text bg={'teal.400'} paddingX={'1'} borderRadius={'10px'} color={'white'}>
              {items.status}
            </Text>
          </Flex>
        </VStack>
      </Box>
    </Pressable>
  );
};

export default TaskItem;
