import React from 'react';

// Type
import {WelcomeNavigationProps} from '@src/navigation/types';

// Component
import SplashBrand from '@src/components/Splash/Brand';
import SplashWelcome from '@src/components/Splash/Welcome';

const SplashScreen = ({
  navigation,
  route,
}: WelcomeNavigationProps<'SplashScreen'>) => {
  return (
    <>
      <SplashBrand />
      <SplashWelcome navigation={navigation} route={route} />
    </>
  );
};

export default SplashScreen;
