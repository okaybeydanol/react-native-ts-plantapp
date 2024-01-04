import {
  ActivityIndicatorProps,
  TextProps,
  TouchableOpacityProps,
} from 'react-native';

// Button
export interface CustomButtonProps extends TouchableOpacityProps {
  activityIndicatorProps?: ActivityIndicatorProps;
  textProps?: TextProps;
  title?: string;
  loading?: boolean;
}

// Loading
export interface LoadingProps {
  isLoading?: boolean;
}
