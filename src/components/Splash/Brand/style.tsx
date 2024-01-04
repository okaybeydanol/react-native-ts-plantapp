import {StyleSheet} from 'react-native';

// Constant
import {dimension} from '@src/constants/dimensions';

const styles = StyleSheet.create({
  animatedContainer: {
    position: 'absolute',
    backgroundColor: '#fff',
    zIndex: 1,
    width: dimension.width,
    height: dimension.height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  splashText: {
    color: '#13231B',
    fontSize: 24,
    fontFamily: 'Rubik-Regular',
    letterSpacing: 0.07,
  },
});

export default styles;
