import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

// Image
import brush from '@assets/image/brush.png';

// Constant
import {dimension, statusBarHeight} from '@src/constants/dimensions';

// Type
import {HeaderAreaProps} from './types';

const HeaderArea = ({
  textOne,
  textTwo,
  textImage,
  topHeight,
  ...props
}: HeaderAreaProps) => {
  return (
    <View
      style={[
        styles.headerContainer,
        {
          height: topHeight,
        },
      ]}>
      <View style={styles.titleContainer}>
        <Text numberOfLines={1} style={styles.desc}>
          {textOne}
        </Text>
        <View>
          <Text numberOfLines={1} style={styles.descBold}>
            {' '}
            {textImage}
          </Text>
          <Image
            resizeMode="contain"
            style={styles.textWithImage}
            source={brush}
            {...props}
          />
        </View>
      </View>
      {textTwo && (
        <Text numberOfLines={1} style={styles.desc}>
          {textTwo}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    marginBottom: 8,
    marginHorizontal: 24,
    width: dimension.width - 48,
  },
  titleContainer: {
    flexDirection: 'row',
    marginTop: 12 + statusBarHeight,
  },
  textWithImage: {
    position: 'absolute',
    bottom: -16,
    left: -14,
    width: '120%',
    height: 13,
  },
  desc: {
    color: '#13231B',
    fontSize: 28,
    fontFamily: 'Rubik-Medium',
    letterSpacing: -1,
    height: 37,
  },
  descBold: {
    color: '#13231B',
    fontSize: 28,
    fontFamily: 'Rubik-ExtraBold',
    letterSpacing: -1,
    height: 37,
  },
});

export default React.memo(HeaderArea);
