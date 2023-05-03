import { Avatar } from 'native-base';
import React, { FC } from 'react';

const AvatarProfile: FC = () => {
  return (
    <Avatar
      bgColor={'coolGray.50'}
      size="md"
      source={require('../../../assets/img/myAvatar.png')}></Avatar>
  );
};

export default AvatarProfile;
