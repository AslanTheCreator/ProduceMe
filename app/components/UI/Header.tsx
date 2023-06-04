import React, { FC } from 'react';
import { Heading } from 'native-base';

const Header: FC<{ title: string; isCenter?: boolean; size?: number; opacity?: number }> = ({
  title,
  isCenter = false,
  size = 35,
  opacity = 0.9,
}) => {
  return (
    <Heading
      color={'white'}
      opacity={opacity}
      fontSize={size}
      textAlign={isCenter ? 'center' : 'left'}>
      {title}
    </Heading>
  );
};

export default Header;
