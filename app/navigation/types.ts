import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';
import { ISport } from '../components/screens/sport/types';

export type TypeRootStackParamList = {
  Home: undefined;
  Welcome: undefined;
  Registration: undefined;
  Auth: {
    isReg: boolean;
  };
  Meditation: undefined;
  Tasks: undefined;
  Sport: undefined;
  SportDetails: {
    items: ISport;
  };
  Profile: undefined;
  Settings: undefined;
};

export const RootStack = createNativeStackNavigator<TypeRootStackParamList>();

export type Props = NativeStackScreenProps<TypeRootStackParamList, 'Auth'>;

export type PropsSportDetails = NativeStackScreenProps<TypeRootStackParamList, 'SportDetails'>;
