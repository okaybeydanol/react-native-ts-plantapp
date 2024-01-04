import {StyleSheet} from 'react-native';
import {dimension} from '@src/constants/dimensions';

const styles = StyleSheet.create({
  backgroundImage: {
    width: dimension.width,
    paddingLeft: 24,
  },
  greetingText: {
    color: '#13231B',
    fontFamily: 'Rubik-Regular',
    fontSize: 16,
    letterSpacing: 0.07,
    marginBottom: 6,
  },
  mainText: {
    color: '#13231B',
    fontFamily: 'Rubik-Medium',
    fontSize: 24,
    lineHeight: 28,
    letterSpacing: 0.35,
    marginBottom: 14,
  },
  inputContainer: {
    width: dimension.width - 48,
  },
});

export default styles;
