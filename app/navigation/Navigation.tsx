import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React, { FC, useState, useEffect } from 'react';
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native';
import { useAuth } from '../hooks/useAuth';
import Home from '../components/screens/home/Home';
import Meditation from '../components/screens/meditation/Meditation';
import Tasks from '../components/screens/tasks/Tasks';
import Sport from '../components/screens/sport/Sport';
import Profile from '../components/screens/profile/Profile';
import { Welcome } from '../components/screens/welcome/Welcome';
import Auth from '../components/screens/auth/Auth';
import Footer from '../components/layout/footer/Footer';

const Stack = createNativeStackNavigator();

export const Navigation: FC = () => {
  const ref = useNavigationContainerRef();

  const { user } = useAuth();
  const [name, setName] = useState<string | undefined>(undefined);

  useEffect(() => {
    const timeout = setTimeout(() => setName(ref.getCurrentRoute()?.name), 100);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const listener = ref.addListener('state', () => setName(ref.getCurrentRoute()?.name));

    return () => {
      ref.removeListener('state', listener);
    };
  }, []);

  return (
    <>
      <NavigationContainer ref={ref}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          {user ? (
            <>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="Meditation" component={Meditation} />
              <Stack.Screen name="Tasks" component={Tasks} />
              <Stack.Screen name="Sport" component={Sport} />
              <Stack.Screen name="Profile" component={Profile} />
            </>
          ) : (
            <>
              <Stack.Screen name="Welcome" component={Welcome} />
              <Stack.Screen name="Auth" component={Auth} />
            </>
          )}
        </Stack.Navigator>
      </NavigationContainer>
      {user && name && <Footer navigate={ref.navigate} currentRoute={name} />}
    </>
  );
};
