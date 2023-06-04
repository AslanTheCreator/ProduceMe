import React, { FC } from 'react';
import { FlatList, Box, Text, VStack, Center, Pressable } from 'native-base';

const Header: FC = () => {
  const data = [
    {
      month: 'May',
      day: 19,
      dayWeek: 'Fri',
    },
    {
      month: 'May',
      day: 20,
      dayWeek: 'Sat',
    },
    {
      month: 'May',
      day: 21,
      dayWeek: 'Sun',
    },
    {
      month: 'May',
      day: 22,
      dayWeek: 'Mon',
    },
    {
      month: 'May',
      day: 23,
      dayWeek: 'Tue',
    },
    {
      month: 'May',
      day: 24,
      dayWeek: 'Wed',
    },
  ];
  return (
    <Box>
      <Center>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Pressable>
              {({ isHovered, isFocused, isPressed }) => {
                return (
                  <Box
                    mr={5}
                    bg={isPressed ? 'teal.400' : 'coolGray.400'}
                    rounded={10}
                    minW={'55px'}
                    minH={'75px'}>
                    <VStack>
                      <Center>
                        <Text color={'white'}>{item.month}</Text>
                        <Text color={'white'}>{item.day}</Text>
                        <Text color={'white'}>{item.dayWeek}</Text>
                      </Center>
                    </VStack>
                  </Box>
                );
              }}
            </Pressable>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </Center>
    </Box>
  );
};

export default Header;
