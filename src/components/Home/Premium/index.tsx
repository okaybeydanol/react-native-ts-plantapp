import {Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {uiSvgHelper} from '@src/utils/svg';

// Component
import GradientText from '@src/components/UI/GradientText';

// Style
import styles from './style';

const HomePremium = () => {
  return (
    <>
      <TouchableOpacity activeOpacity={0.9} style={styles.premiumContainer}>
        <View style={styles.iconContainer}>
          {uiSvgHelper({code: 'mail'})}
          <View style={styles.notificationBadge}>
            <Text style={styles.badgeText}>1</Text>
          </View>
        </View>
        <View style={styles.textContainer}>
          <GradientText
            colors={['#E5C990', '#E4B046']}
            style={styles.premiumTitle}>
            FREE Premium Available
          </GradientText>
          <GradientText
            colors={['#F5C25B', '#FFDE9C']}
            style={styles.premiumSubtitle}>
            Tap to upgrade your account!
          </GradientText>
        </View>
        {uiSvgHelper({code: 'rightArrow'})}
      </TouchableOpacity>
    </>
  );
};

export default HomePremium;
