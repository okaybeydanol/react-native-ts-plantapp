import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

// Image
import background from '@assets/image/homeBackground.png';

// Hook
import useTextInput from '@src/hooks/useTextInput';

// Style
import styles from './style';

const HomeHeader = () => {
  const insets = useSafeAreaInsets();
  const search = useTextInput({});
  return (
    <ImageBackground
      style={[
        styles.backgroundImage,
        {
          height: 130 + insets.top,
          paddingTop: insets.top,
        },
      ]}
      resizeMode="stretch"
      source={background}>
      <Text style={styles.greetingText}>Hi, plant lover!</Text>
      <Text style={styles.mainText}>Good Afternoon! ⛅</Text>
      <View style={styles.inputContainer}>{search.textInputRender()}</View>
    </ImageBackground>
  );
};

export default HomeHeader;
