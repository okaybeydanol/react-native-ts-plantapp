import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const OnboardingCircle = ({selected}: {selected: boolean}) => {
  const scale = useSharedValue(1);
  const scaleStyle = useAnimatedStyle(() => {
    return {
      transform: [{scale: scale.value}],
    };
  });

  useEffect(() => {
    scale.value = withTiming(selected ? 1.6 : 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return <Animated.View style={[styles(selected).container, scaleStyle]} />;
};

const styles = (selected: boolean) =>
  StyleSheet.create({
    container: {
      width: 6,
      height: 6,
      borderRadius: 3,
      marginRight: 8,
      backgroundColor: '#13231B',
      opacity: selected ? 1 : 0.25,
      transform: [{scale: selected ? 1.6 : 1}],
    },
  });

export default OnboardingCircle;
