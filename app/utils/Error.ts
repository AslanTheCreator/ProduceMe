import { Alert } from 'react-native';

export const getErrorMessage = (error: unknown) => {
  let message = 'Unknown Error';
  if (error instanceof Error) message = error.message;
  Alert.alert('Error registration:', message);
};
