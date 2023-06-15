import { AntDesign } from '@expo/vector-icons';

export interface IProfile {
  title: string;
  icon: keyof typeof AntDesign.glyphMap;
  textProfile: string;
  onPress?: void;
}

export const Profile: IProfile[] = [
  {
    title: 'Account',
    icon: 'user',
    textProfile: 'Change account name',
  },
  {
    title: '',
    icon: 'key',
    textProfile: 'Change account password',
  },
  {
    title: '',
    icon: 'camera',
    textProfile: 'Change account image',
  },
];
