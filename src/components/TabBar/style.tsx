import {Platform, StyleSheet} from 'react-native';

// Constant
import {tabBarHeight, dimension} from '../../constants/dimensions';
import {toScale} from '@src/utils/helpers';

export const styles = StyleSheet.create({
  tabBarShare: {
    bottom:
      Platform.OS === 'android' ? 0 : dimension.height <= 736 ? 0 : toScale(16),
    width: dimension.width,
    position: 'absolute',
  },
  tabBarContainerButton: {
    height: toScale(tabBarHeight),
    justifyContent: 'center',
    zIndex: 1,
    backgroundColor: 'rgba(255,255,255,0.97)',
  },
  tabBarLeftButton: {
    position: 'absolute',
    left: 0,
    width: dimension.width / 2 - toScale(36),
    flexDirection: 'row',
  },
  tabBarRightButton: {
    position: 'absolute',
    width: dimension.width / 2 - toScale(36),
    right: 0,
    flexDirection: 'row',
  },
  tabBarContainerCircle: {
    zIndex: 2,
    width: 74,
    height: 64,
    left: dimension.width / 2 - 32,
    top: -24,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabBarAbsolute: {
    height: toScale(16),
    width: dimension.width,
    position: 'absolute',
    bottom: 0,
    backgroundColor: 'rgba(255,255,255,0.97)',
  },
});
