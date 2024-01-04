import {View, Text} from 'react-native';
import React from 'react';

// Helper
import {uiSvgHelper} from '@src/utils/svg';
import {firstLetterUppercase} from '@src/utils/helpers';

// Style
import styles from './style';

// Type
interface PaywallFeaturesProps {
  item: {
    name: string;
    desc: string;
  };
}
const PaywallFeatures = ({item}: PaywallFeaturesProps) => {
  return (
    <View style={styles.featureItem}>
      <View style={styles.iconContainer}>{uiSvgHelper({code: item.name})}</View>
      <Text style={styles.itemName}>{firstLetterUppercase(item.name)}</Text>
      <Text style={styles.itemDesc}>{item.desc}</Text>
    </View>
  );
};

export default PaywallFeatures;
