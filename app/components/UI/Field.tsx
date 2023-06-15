import React, { FC } from 'react';
import { FormControl, Input } from 'native-base';
import { ColorType } from 'native-base/lib/typescript/components/types';

interface IField {
  onChange: (value: string) => void;
  label?: string;
  value: string;
  placeholder?: string;
  typeInput?: 'text' | 'password';
  backgroundColor?: ColorType;
}

const Field: FC<IField> = ({
  label,
  typeInput,
  onChange,
  value,
  placeholder,
  backgroundColor = 'coolGray.800',
}) => {
  return (
    <FormControl>
      <FormControl.Label>{label}</FormControl.Label>
      <Input
        bg={backgroundColor}
        color={'white'}
        placeholder={placeholder}
        type={typeInput}
        value={value}
        onChangeText={onChange}
      />
    </FormControl>
  );
};

export default Field;
