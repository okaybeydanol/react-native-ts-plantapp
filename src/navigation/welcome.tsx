import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Type
import {WelcomeStack} from './types';

// Screen
import SplashScreen from '@src/screens/SplashScreen';
import OnboardingScreen from '@src/screens/OnboardingScreen';
import PaywallScreen from '@src/screens/PaywallScreen';

const Welcome = createNativeStackNavigator<WelcomeStack>();

export const WelcomeNavigator = () => {
  return (
    <Welcome.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Welcome.Screen name="SplashScreen" component={SplashScreen} />
      <Welcome.Screen name="OnboardingScreen" component={OnboardingScreen} />
      <Welcome.Screen name="PaywallScreen" component={PaywallScreen} />
    </Welcome.Navigator>
  );
};
