import React, { FC } from 'react';
import { Center, Icon, Pressable, Text } from 'native-base';
import { IFooterItem } from './types';
import { AntDesign } from '@expo/vector-icons';
import { TypeRootStackParamList } from '../../../navigation/types';

interface INavItem {
  item: IFooterItem;
  navigate: (screenName: keyof TypeRootStackParamList) => void;
  currentRoute: string;
}

const NavItem: FC<INavItem> = ({ item, navigate, currentRoute }) => {
  const isActive = currentRoute === item.title;

  return (
    <Pressable w="20%" onPress={() => navigate(item.title)} opacity={isActive ? 1 : 0.5}>
      <Center>
        <Icon
          size={'lg'}
          mb="8px"
          as={<AntDesign name={isActive ? item.iconNameActive : item.iconName} />}
          color={'white'}
        />
        <Text fontSize={'12px'} color={'white'} opacity={0.8}>
          {item.title}
        </Text>
      </Center>
    </Pressable>
  );
};

export default NavItem;
