import React from 'react';
import {Image} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

// Image
import onboardingTwo from '@assets/image/onboardingTwo.png';
import overlay from '@assets/image/overlay.png';

// Component
import HeaderArea from '../HeaderArea';
import StepWrapper from '../StepWrapper';
import ImageArea from './ImageArea';

// Constant
import {statusBarHeight} from '@src/constants/dimensions';

// Type
import {OnboardingStepsProps} from '../types';

// Styles
import styles from './style';

const topMargin = 12 + statusBarHeight;
const topHeight = 38 + topMargin;
const OnboardingStepTwo = ({index, bottomHeight}: OnboardingStepsProps) => {
  const insets = useSafeAreaInsets();

  return (
    <StepWrapper index={index} bottomHeight={bottomHeight}>
      <HeaderArea
        textOne={'Get plant'}
        textImage={'care guides'}
        topHeight={topHeight}
      />
      <ImageArea
        source={onboardingTwo}
        bottomHeight={bottomHeight}
        topHeight={topHeight}
      />
      <Image
        resizeMode="stretch"
        style={[
          styles.overlay,
          {
            bottom: -bottomHeight - insets.bottom,
          },
        ]}
        source={overlay}
      />
    </StepWrapper>
  );
};

export default React.memo(OnboardingStepTwo);
