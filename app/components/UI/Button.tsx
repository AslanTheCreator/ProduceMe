import { Button, Text } from 'native-base';
import React, { FC } from 'react';

interface IButton {
  onPress: () => void;
  title: string;
  color: string;
  borderColor?: string;
  variantColor?: string;
  height?: number;
  width?: number;
  borderRadius?: string;
}

const MyButton: FC<IButton> = ({
  onPress,
  title,
  color,
  borderColor = 'none',
  variantColor = 'solid',
  height = 61,
  borderRadius = '10px',
  width,
}) => {
  return (
    <Button
      w={width}
      borderRadius={borderRadius}
      minH={height}
      borderColor={borderColor}
      variant={variantColor}
      colorScheme={color}
      onPress={onPress}>
      <Text color={'white'} fontSize={16}>
        {title}
      </Text>
    </Button>
  );
};

export default MyButton;
