import {View} from 'react-native';
import React from 'react';

// Style
import styles from './style';
import {uiSvgHelper} from '@src/utils/svg';

const TabBarCircle = () => {
  return (
    <View style={styles.container}>
      <View style={styles.viewContainer}>
        {uiSvgHelper({code: 'unlimited', props: {width: 23, height: 23}})}
      </View>
    </View>
  );
};

export default TabBarCircle;
