import React, { FC } from 'react';
import { Box, HStack } from 'native-base';
import { menu } from './menu';
import NavItem from './NavItem';
import { TypeRootStackParamList } from '../../../navigation/types';

interface IFooter {
  navigate: (screenName: keyof TypeRootStackParamList) => void;
  currentRoute: string;
}

const Footer: FC<IFooter> = ({ navigate, currentRoute }) => {
  return (
    <Box bg={'coolGray.400'} minH={'100px'} alignItems={'center'} justifyContent={'center'}>
      <HStack safeAreaBottom shadow={6}>
        {menu.map((item) => (
          <NavItem currentRoute={currentRoute} navigate={navigate} key={item.title} item={item} />
        ))}
      </HStack>
    </Box>
  );
};

export default Footer;
