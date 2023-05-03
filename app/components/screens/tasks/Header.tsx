import React, { FC } from 'react';
import { FlatList, Box, Text, VStack, Center } from 'native-base';

const Header: FC = () => {
  const data = [
    {
      month: 'May',
      day: 25,
      dayWeek: 'Sunday',
    },
    {
      month: 'May',
      day: 26,
      dayWeek: 'Monday',
    },
    {
      month: 'May',
      day: 27,
      dayWeek: 'Monday',
    },
    {
      month: 'May',
      day: 28,
      dayWeek: 'Monday',
    },
    {
      month: 'May',
      day: 29,
      dayWeek: 'Monday',
    },
    {
      month: 'May',
      day: 29,
      dayWeek: 'Monday',
    },
  ];
  return (
    <Box>
      <Center>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Box mr={5} bg={'coolGray.400'} rounded={10}>
              <VStack>
                <Center>
                  <Text color={'white'}>{item.month}</Text>
                  <Text color={'white'}>{item.day}</Text>
                  <Text color={'white'}>{item.dayWeek}</Text>
                </Center>
              </VStack>
            </Box>
          )}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
      </Center>
    </Box>
  );
};

export default Header;
