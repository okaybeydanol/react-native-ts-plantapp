import React from 'react';
import {Image, StyleSheet} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

// Constant
import {dimension} from '@src/constants/dimensions';

// Type
import {ImageAreaProps} from '../types';

const ImageArea = ({bottomHeight, topHeight, ...props}: ImageAreaProps) => {
  const insets = useSafeAreaInsets();
  const height =
    dimension.height - insets.bottom - insets.top - bottomHeight - topHeight;

  return (
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
  );
};

const styles = StyleSheet.create({
  onboardingImage: {
    width: dimension.width,
  },
});

export default React.memo(ImageArea);
