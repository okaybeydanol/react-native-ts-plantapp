import {StyleSheet} from 'react-native';

// Constant
import {dimension, statusBarHeight} from '@src/constants/dimensions';

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
    marginHorizontal: 24,
  },
  headerContainer: {
    width: dimension.width - 120,
    marginBottom: 24,
    marginTop: 12 + statusBarHeight,
  },
  titleContainer: {
    flexDirection: 'row',
    marginBottom: 8,
  },
  welcomeText: {
    color: '#13231B',
    fontSize: 28,
    fontFamily: 'Rubik-Regular',
    letterSpacing: 0.07,
  },
  appNameText: {
    color: '#13231B',
    fontSize: 28,
    fontFamily: 'Rubik-SemiBold',
    letterSpacing: 0.07,
  },
  descriptionText: {
    fontSize: 16,
    fontFamily: 'Rubik-Regular',
    lineHeight: 22,
    letterSpacing: 0.07,
    color: 'rgba(19, 35, 27, 0.7)',
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  onboardingImage: {
    width: dimension.width,
    height: '100%',
  },
  footerContainer: {
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'SFProText-Bold',
    lineHeight: 24,
    fontSize: 15,
    letterSpacing: -0.24,
  },
  termsText: {
    marginBottom: 8,
    marginTop: 17,
    color: 'rgba(89, 113, 101, 0.7)',
    width: 232,
    textAlign: 'center',
    fontSize: 11,
    fontFamily: 'Rubik-Regular',
    lineHeight: 15,
    letterSpacing: 0.07,
  },
  underline: {
    textDecorationLine: 'underline',
  },
});

export default styles;
