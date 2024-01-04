import {ViewStyle, StyleProp} from 'react-native';
import {SvgProps} from 'react-native-svg';

// Type

// SvgHelper
export interface SvgHelperProps {
  code: string;
  style?: StyleProp<ViewStyle>;
  props?: SvgProps;
}
