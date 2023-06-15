import { NativeStackScreenProps, createNativeStackNavigator } from '@react-navigation/native-stack';

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
  Profile: undefined;
  Settings: undefined;
};

export const RootStack = createNativeStackNavigator<TypeRootStackParamList>();

export type Props = NativeStackScreenProps<TypeRootStackParamList, 'Auth'>;
