import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
} from 'react-native';

// Type
import {CustomButtonProps} from '@src/components/UI/types';

const Button = ({
  activityIndicatorProps,
  textProps,
  title = 'Button',
  loading = false,
  style,
  disabled,
  children,
  ...touchableOpacityProps
}: CustomButtonProps) => {
  // Combined style for the container
  const containerStyle = [
    styles.contentContainer,
    style,
    disabled && styles.disabledContainer,
  ];

  // Content of the button, either the children or a text component
  const buttonContent = children || <Text {...textProps}>{title}</Text>;

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      {...touchableOpacityProps}
      style={containerStyle}
      disabled={loading || disabled}>
      {loading ? (
        <ActivityIndicator
          size="small"
          color="#000000"
          {...activityIndicatorProps}
        />
      ) : (
        buttonContent
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    height: 56,
    borderRadius: 12,
    width: '100%',
    backgroundColor: '#28AF6E',
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledContainer: {
    opacity: 0.6,
  },
});

export default Button;
