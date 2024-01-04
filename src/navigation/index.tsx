import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Route
import * as navigator from './root';

// Store
import {useAppSelector} from '../store';

const Stack = createNativeStackNavigator();
const routeHandler = (routeName: string) => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={routeName}
        component={navigator[routeName as keyof typeof navigator]}
      />
    </Stack.Navigator>
  );
};

function RootNavigator() {
  const routeName = useAppSelector(state => state.route.path);
  return routeHandler(routeName);
}

export default function Navigation() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={'transparent'}
        translucent
      />
      <NavigationContainer>
        <RootNavigator />
      </NavigationContainer>
    </>
  );
}
