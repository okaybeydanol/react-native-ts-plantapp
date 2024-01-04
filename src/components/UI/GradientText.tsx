import MaskedView from '@react-native-masked-view/masked-view';
import React from 'react';
import {Text, TextProps} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

interface GradientTextProps extends TextProps {
  colors: string[];
}

const GradientText = ({colors, ...rest}: GradientTextProps) => {
  return (
    <MaskedView maskElement={<Text {...rest} />}>
      <LinearGradient colors={colors} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
        <Text {...rest} style={[rest.style, {opacity: 0}]} />
      </LinearGradient>
    </MaskedView>
  );
};

export default GradientText;
