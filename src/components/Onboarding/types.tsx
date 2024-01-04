import {ImageProps} from 'react-native';

export interface StepWrapperProps {
  index: number;
  bottomHeight: number;
  children: React.ReactNode;
}

export interface HeaderAreaProps extends ImageProps {
  textOne: string;
  textTwo?: string;
  textImage: string;
  topHeight: number;
}

export interface OnboardingStepsProps {
  index: number;
  bottomHeight: number;
}

export interface ImageAreaProps extends ImageProps {
  bottomHeight: number;
  topHeight: number;
}
