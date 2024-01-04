import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  ImageBackground,
  ScrollView,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

// Imge
import paywallBackground from '@assets/image/paywall.png';

// Component
import Button from '@src/components/UI/Button';
import PaywallFeatures from '@src/components/Paywall/Features';
import PaywallPremium from '@src/components/Paywall/Premium';

// Helper
import {uiSvgHelper} from '@src/utils/svg';

// Store
import {useAppDispatch} from '@src/store';
import {setRoute} from '@src/store/slices/route';
import {setLogin} from '@src/store/slices/login';

// Constant
import {dimension} from '@src/constants/dimensions';

const featuresData = [
  {name: 'unlimited', desc: 'Plant Identify'},
  {name: 'faster', desc: 'Process'},
  {name: 'detailed', desc: 'Plant care'},
];

const PaywallScreen = () => {
  const insets = useSafeAreaInsets();
  const dispatch = useAppDispatch();

  const navigateHandler = () => {
    dispatch(setRoute({path: 'MainNavigator'}));
    dispatch(setLogin({login: true}));
  };

  return (
    <ImageBackground
      resizeMode="stretch"
      source={paywallBackground}
      style={styles.container}>
      <StatusBar
        barStyle="light-content"
        backgroundColor={'transparent'}
        translucent
      />
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={navigateHandler}
        style={[
          styles.closeContainer,
          {
            top: insets.top + 8,
          },
        ]}>
        {uiSvgHelper({code: 'close'})}
      </TouchableOpacity>
      <View style={[styles.viewContainer, {bottom: insets.bottom}]}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>PlantApp</Text>
          <Text style={styles.subtitle}> Premium</Text>
        </View>
        <Text style={styles.description}>Access All Features</Text>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.featureContainer}>
          {featuresData.map((item, index) => (
            <PaywallFeatures item={item} key={index} />
          ))}
        </ScrollView>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.premiumContainer}>
          <PaywallPremium />
        </ScrollView>
        <Button
          activeOpacity={0.9}
          style={styles.button}
          textProps={{style: styles.buttonText}}
          title="Try free for 3 days"
          onPress={navigateHandler}
        />
        <Text style={styles.trialText}>
          After the 3-day free trial period you’ll be charged ₺274.99 per year
          unless you cancel before the trial expires. Yearly Subscription is
          Auto-Renewable
        </Text>
        <Text style={styles.bottomText}>Terms • Privacy • Restore</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    width: dimension.width,
    height: dimension.height,
    backgroundColor: '#101E17',
  },
  closeContainer: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    right: 16,
  },
  close: {
    fontSize: 10,
    fontFamily: 'SFProText-Semibold',
    lineHeight: 18,
    letterSpacing: -0.08,
    color: '#fff',
  },
  viewContainer: {
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 24,
    marginBottom: 4,
  },
  title: {
    fontSize: 30,
    fontFamily: 'VisbyCF-ExtraBold',
    lineHeight: 30,
    color: '#fff',
  },
  subtitle: {
    fontSize: 27,
    fontFamily: 'Rubik-Light',
    color: '#fff',
  },
  description: {
    fontSize: 17,
    fontFamily: 'Rubik-Light',
    letterSpacing: 0.38,
    color: '#fff',
    opacity: 0.7,
    marginBottom: 24,
    marginLeft: 24,
  },
  featureContainer: {
    paddingLeft: 24,
    paddingRight: 16,
    marginBottom: 24,
  },
  premiumContainer: {
    paddingHorizontal: 24,
    marginBottom: 26,
  },
  button: {
    marginBottom: 8,
    width: dimension.width - 48,
    marginHorizontal: 24,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'Rubik-Medium',
    lineHeight: 24,
    fontSize: 16,
    letterSpacing: -0.24,
  },
  trialText: {
    color: 'rgba(255, 255, 255, 0.52)',
    fontFamily: 'Rubik-Light',
    fontSize: 9,
    lineHeight: 12,
    textAlign: 'center',
    marginHorizontal: 24,
    marginBottom: 10,
  },
  bottomText: {
    color: 'rgba(255, 255, 255, 0.5)',
    fontFamily: 'Rubik-Regular',
    fontSize: 11,
    textAlign: 'center',
    marginHorizontal: 24,
  },
});

export default PaywallScreen;
