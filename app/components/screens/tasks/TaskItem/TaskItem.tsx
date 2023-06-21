import { Pressable, Box, VStack, Heading, Text, Flex, Spacer } from 'native-base';
import React, { FC } from 'react';
import { ITask } from './task';
import Block from '../../../UI/Block';

interface ITaskItem {
  items: ITask;
}

const TaskItem: FC<ITaskItem> = ({ items }) => {
  return (
    <Pressable>
      <Block height="120px" colorHeading={'muted.300'} contentHeading={items.desc} margin="20px">
        <Flex direction="row">
          <Text color={'teal.400'}>{items.time}</Text>
          <Spacer />
          <Text bg={'teal.400'} paddingX={'1'} borderRadius={'10px'} color={'white'}>
            {items.status}
          </Text>
        </Flex>
      </Block>
    </Pressable>
  );
};

export default TaskItem;
