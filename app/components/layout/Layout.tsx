import { Box, ScrollView } from 'native-base';
import React, { FC } from 'react';

interface ILayout {
  isScrollView?: boolean;
  children: React.ReactNode;
}

export const Layout: FC<ILayout> = ({ children, isScrollView }) => {
  return (
    <Box h={'full'} w={'full'} bg={'coolGray.600'} safeArea>
      <Box pt="12px" mx={'auto'} w="90%">
        {isScrollView ? (
          <ScrollView showsVerticalScrollIndicator={false}>{children}</ScrollView>
        ) : (
          children
        )}
      </Box>
    </Box>
  );
};
