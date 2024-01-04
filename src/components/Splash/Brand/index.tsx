import {Text} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

// Style
import styles from './style';
import {useAppDispatch, useAppSelector} from '@src/store';
import {setRoute} from '@src/store/slices/route';

const SplashBrand = () => {
  const {login} = useAppSelector(state => state.login);
  const dispatch = useAppDispatch();

  const opacity = useSharedValue(1);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: opacity.value,
      zIndex: opacity.value === 0 ? -1 : 1,
    };
  });

  useEffect(() => {
    if (!login) {
      const timer = setTimeout(() => {
        opacity.value = withTiming(0, {
          duration: 500,
        });
      }, 2000);
      return () => clearTimeout(timer);
    } else {
      const timer = setTimeout(() => {
        dispatch(setRoute({path: 'MainNavigator'}));
      }, 2000);
      return () => clearTimeout(timer);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Animated.View style={[styles.animatedContainer, animatedStyle]}>
      <Text style={styles.splashText}>PlantApp</Text>
    </Animated.View>
  );
};

export default SplashBrand;
