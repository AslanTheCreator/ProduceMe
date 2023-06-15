import { Avatar } from 'native-base';
import React, { FC } from 'react';

interface IAvatarProfile {
  size: 'xs' | 'xl' | 'sm' | 'md' | 'lg' | '2xl';
}

const AvatarProfile: FC<IAvatarProfile> = ({ size }) => {
  return <Avatar bgColor={'coolGray.50'} size={size}></Avatar>;
  // source={require('../../../assets/img/myAvatar.png')}
};

export default AvatarProfile;
