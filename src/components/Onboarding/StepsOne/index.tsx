import React from 'react';

// Image
import onboardingOne from '@assets/image/onboardingOne.png';

// Component
import HeaderArea from '../HeaderArea';
import StepWrapper from '../StepWrapper';
import ImageArea from './ImageArea';

// Constant
import {statusBarHeight} from '@src/constants/dimensions';

// Type
import {OnboardingStepsProps} from '../types';

const topMargin = 12 + statusBarHeight;
const topHeight = 90 + topMargin;
const OnboardingStepOne = ({index, bottomHeight}: OnboardingStepsProps) => {
  return (
    <StepWrapper index={index} bottomHeight={bottomHeight}>
      <HeaderArea
        textOne={'Take a photo to'}
        textTwo={'the plant!'}
        textImage={'identify'}
        topHeight={topHeight}
      />
      <ImageArea
        source={onboardingOne}
        bottomHeight={bottomHeight}
        topHeight={topHeight}
      />
    </StepWrapper>
  );
};

export default React.memo(OnboardingStepOne);
