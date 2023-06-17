import { Avatar } from 'native-base';
import React, { FC } from 'react';

interface IAvatarProfile {
  size: 'xs' | 'xl' | 'sm' | 'md' | 'lg' | '2xl';
  img?: string;
}

const AvatarProfile: FC<IAvatarProfile> = ({ size, img }) => {
  return <Avatar bgColor={'coolGray.50'} size={size} source={{ uri: img }}></Avatar>;
};

export default AvatarProfile;
