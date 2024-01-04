import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';

// Type
import {StateRoutesMapParams, TabBarButtonProps} from '../types';

// Helper
import {uiSvgHelper} from '@src/utils/svg';

// Style
import {styles} from './style';

const Button = ({fill, code, text}: TabBarButtonProps) => {
  return (
    <View style={styles.buttonContainer}>
      {uiSvgHelper({
        code,
        props: {fill},
      })}
      <Text
        style={[
          styles.tabBarText,
          {
            color: fill,
          },
        ]}>
        {text}
      </Text>
    </View>
  );
};

const TabBarButton = ({navigation, state, index}: StateRoutesMapParams) => {
  const isFocused = state.index === index;
  const fill = isFocused ? '#28AF6E' : '#BDBDBD';

  const onPress = () => {
    const event = navigation.emit({
      type: 'tabPress',
      target: state.routes[index].key,
      canPreventDefault: true,
    });

    if (!isFocused && !event.defaultPrevented) {
      navigation.navigate({
        key: state.routes[index].key,
        merge: true,
      });
    }
  };

  const tabBarIcon = () => {
    if (state.routes[index].name === 'HomeScreen') {
      return <Button fill={fill} code="home" text="Home" />;
    }
    if (state.routes[index].name === 'DiagnoseScreen') {
      return <Button fill={fill} code="diagnose" text="Diagnose" />;
    }
    if (state.routes[index].name === 'GardenScreen') {
      return <Button fill={fill} code="garden" text="My Garden" />;
    }
    if (state.routes[index].name === 'ProfileScreen') {
      return <Button fill={fill} code="profile" text="Profile" />;
    }
  };

  return (
    <TouchableOpacity
      key={`tabBarButton-${index}`}
      onPress={onPress}
      accessibilityState={isFocused ? {selected: true} : {}}
      style={styles.tabBarTouchableOpacity}
      activeOpacity={0.9}>
      <View style={styles.tabBarButtonContainer}>{tabBarIcon()}</View>
    </TouchableOpacity>
  );
};

export default TabBarButton;
