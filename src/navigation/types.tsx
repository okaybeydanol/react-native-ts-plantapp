import type {NavigatorScreenParams} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';

// NAVIGATION
export type RootStack = {
  MainNavigator: NavigatorScreenParams<TabStackParams>;
};

export type TabStackParams = {
  HomeScreen: undefined;
  DiagnoseScreen: undefined;
  GardenScreen: undefined;
  ProfileScreen: undefined;
};

export type WelcomeStack = {
  SplashScreen: undefined;
  PaywallScreen: undefined;
  OnboardingScreen: undefined;
};

export type WelcomeNavigationProps<T extends keyof WelcomeStack> =
  NativeStackScreenProps<WelcomeStack, T>;

export type RootStackScreenProps<T extends keyof RootStack> =
  NativeStackScreenProps<RootStack, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStack {}
  }
}
