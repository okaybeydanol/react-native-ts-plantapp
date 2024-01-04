import React from 'react';
import {Image, ImageBackground, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

// Image
import onboardingTwoBackground from '@assets/image/onboardingTwoBackground.png';

// Constant
import {dimension} from '@src/constants/dimensions';

// Type
import {ImageAreaProps} from '../types';

const ImageArea = ({bottomHeight, topHeight, ...props}: ImageAreaProps) => {
  const insets = useSafeAreaInsets();

  const height =
    dimension.height - insets.bottom - insets.top - bottomHeight - topHeight;

  return (
    <ImageBackground
      style={[
        styles.onboardingImageBackground,
        {
          height,
        },
      ]}
      resizeMode="stretch"
      source={onboardingTwoBackground}>
      <Image
        resizeMode="contain"
        style={[
          styles.onboardingImage,
          {
            height,
          },
        ]}
        {...props}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  onboardingImageBackground: {
    width: dimension.width,
  },
  onboardingImage: {
    width: dimension.width,
    bottom: -56,
  },
});

export default React.memo(ImageArea);
