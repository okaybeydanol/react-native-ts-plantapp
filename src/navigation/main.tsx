import React from 'react';
import {
  BottomTabBarProps,
  BottomTabNavigationOptions,
  createBottomTabNavigator,
} from '@react-navigation/bottom-tabs';

// Component
import TabBar from '../components/TabBar';
import HomeScreen from '@src/screens/HomeScreen';

// Type
import {TabStackParams} from './types';

const Tab = createBottomTabNavigator<TabStackParams>();

// Sub Navigator
export const MainNavigator = () => {
  const options: BottomTabNavigationOptions = {
    headerShown: false,
  };

  const tabBar = (props: BottomTabBarProps) => {
    return <TabBar {...props} />;
  };

  return (
    <Tab.Navigator screenOptions={options} tabBar={tabBar}>
      <Tab.Screen name="HomeScreen" component={HomeScreen} />
      <Tab.Screen name="DiagnoseScreen" component={HomeScreen} />
      <Tab.Screen name="GardenScreen" component={HomeScreen} />
      <Tab.Screen name="ProfileScreen" component={HomeScreen} />
    </Tab.Navigator>
  );
};
