import {Dimensions, StatusBar} from 'react-native';

const d = Dimensions.get('window');
export const dimension = {
  width: d.width,
  height: d.height,
};

export const headerHeight = 44;
export const tabBarHeight = 64;
export const statusBarHeight = StatusBar.currentHeight ?? 0;
