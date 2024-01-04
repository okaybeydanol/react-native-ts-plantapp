import React from 'react';
import {StyleSheet} from 'react-native';
import {SvgProps} from 'react-native-svg';

// Icon
import {
  Close,
  Unlimited,
  Detailed,
  Faster,
  Search,
  Mail,
  RightArrow,
  Home,
  Diagnose,
  Garden,
  Profile,
} from './ui';

// Type
import {SvgHelperProps} from '@src/utils/types';

const UI: {[key: string]: React.FC<SvgProps>} = {
  close: Close,
  unlimited: Unlimited,
  detailed: Detailed,
  faster: Faster,
  search: Search,
  mail: Mail,
  rightArrow: RightArrow,
  home: Home,
  diagnose: Diagnose,
  garden: Garden,
  profile: Profile,
};

const uiSvgHelper = ({code, style, props}: SvgHelperProps) => {
  const styles = StyleSheet.flatten(style);
  if (code in UI) {
    const SvgComponent = UI[code];
    return <SvgComponent {...props} style={styles} />;
  } else {
    throw new Error(`SVG with code "${code}" not found.`);
  }
};

export {uiSvgHelper};
