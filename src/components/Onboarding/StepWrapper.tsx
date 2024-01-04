import {View, StyleSheet} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

// Constant
import {dimension, statusBarHeight} from '@src/constants/dimensions';

// Type
import {StepWrapperProps} from './types';

const StepWrapper = ({index, bottomHeight, children}: StepWrapperProps) => {
  const insets = useSafeAreaInsets();

  return (
    <View
      style={[
        styles.container,
        {
          width: dimension.width * index,
          left: dimension.width * index,
          height:
            dimension.height -
            insets.bottom -
            insets.top -
            bottomHeight +
            statusBarHeight,
        },
      ]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
  },
});

export default React.memo(StepWrapper);
