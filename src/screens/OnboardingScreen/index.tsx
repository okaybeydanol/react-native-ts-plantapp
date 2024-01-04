import React, {useEffect, useState} from 'react';
import {ImageBackground, SafeAreaView, StyleSheet, View} from 'react-native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

// Component
import Button from '@src/components/UI/Button';
import OnboardingStepOne from '@src/components/Onboarding/StepsOne';
import OnboardingStepTwo from '@src/components/Onboarding/StepsTwo';
import OnboardingCircle from '@src/components/Onboarding/Circle';

// Image
import background from '@assets/image/background.png';

// Type
import {WelcomeNavigationProps} from '@src/navigation/types';

// Constant
import {dimension} from '@src/constants/dimensions';

const bottomMargin = 12.5;
const bottomHeight = 98 + bottomMargin;
const slidesLength = 2;
const OnboardingScreen = ({
  navigation,
}: WelcomeNavigationProps<'OnboardingScreen'>) => {
  const insets = useSafeAreaInsets();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const translateX = useSharedValue(0);
  const translateXStyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  });

  const goToOnboarding = () => {
    if (selectedIndex < slidesLength - 1) {
      setSelectedIndex(selectedIndex + 1);
    } else {
      navigation.replace('PaywallScreen');
    }
  };

  useEffect(() => {
    if (translateX.value !== -dimension.width * selectedIndex) {
      translateX.value = withTiming(-dimension.width * selectedIndex);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedIndex]);

  return (
    <ImageBackground
      resizeMode="stretch"
      source={background}
      style={styles.flex}>
      <SafeAreaView style={styles.flex}>
        <Animated.View style={[styles.container, translateXStyle]}>
          <OnboardingStepOne bottomHeight={bottomHeight} index={0} />
          <OnboardingStepTwo bottomHeight={bottomHeight} index={1} />
        </Animated.View>
        <View
          style={[
            styles.bottomContainer,
            {
              bottom: insets.bottom,
            },
          ]}>
          <Button
            activeOpacity={0.96}
            onPress={goToOnboarding}
            textProps={{style: styles.buttonText}}
            title="Continue"
          />
          <View style={styles.circleContainer}>
            {new Array(slidesLength).fill(0).map((_, index) => (
              <OnboardingCircle
                key={index}
                selected={index === selectedIndex}
              />
            ))}
          </View>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: dimension.width * slidesLength,
  },
  flex: {
    flex: 1,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'SFProText-Bold',
    lineHeight: 24,
    fontSize: 15,
    letterSpacing: -0.24,
  },
  bottomContainer: {
    position: 'absolute',
    width: dimension.width - 48,
    height: bottomHeight,
    marginLeft: 24,
  },
  circleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 32.5,
  },
});

export default OnboardingScreen;
