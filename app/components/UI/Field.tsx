import React, { FC } from 'react';
import { FormControl, Input } from 'native-base';

interface IField {
  onChange: (value: string) => void;
  label?: string;
  value: string;
  placeholder?: string;
  typeInput?: 'text' | 'password';
}

const Field: FC<IField> = ({ label, typeInput, onChange, value, placeholder }) => {
  return (
    <FormControl>
      <FormControl.Label>{label}</FormControl.Label>
      <Input
        bg={'coolGray.800'}
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
