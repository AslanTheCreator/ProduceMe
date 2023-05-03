import { Navigation } from './app/navigation/Navigation';
import { NativeBaseProvider, View } from 'native-base';
import { customTheme } from './assets/theme/theme';
import { AuthProvider } from './app/providers/AuthProvider';

export default function App() {
  return (
    <NativeBaseProvider theme={customTheme}>
      <AuthProvider>
        <Navigation />
      </AuthProvider>
    </NativeBaseProvider>
  );
}
