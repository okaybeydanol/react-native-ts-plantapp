import React from 'react';
import {View, Platform} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';

// Component
import TabBarButton from './Button';
import TabBarCircle from './Circle';

// Constant
import {dimension} from '../../constants/dimensions';

// Style
import {styles} from './style';

const TabBar = ({state, navigation}: BottomTabBarProps) => {
  const filteredRoutes = React.useMemo(
    () =>
      state.routes.filter(route => {
        return route.name !== 'SearchScreen';
      }),
    [state.routes],
  );
  const routeRight = filteredRoutes.slice(
    0,
    Math.ceil(filteredRoutes.length / 2),
  );
  const routeLeft = filteredRoutes.slice(
    Math.ceil(filteredRoutes.length / 2),
    filteredRoutes.length,
  );

  return (
    <>
      {/** Button */}
      <View style={[styles.tabBarContainerButton, styles.tabBarShare]}>
        <View style={styles.tabBarLeftButton}>
          {routeRight.map((_, index: number) => {
            return (
              <TabBarButton
                key={`routeRight-${index}`}
                navigation={navigation}
                state={state}
                index={index}
              />
            );
          })}
        </View>
        <View style={styles.tabBarRightButton}>
          {routeLeft.map((_, index: number) => {
            return (
              <TabBarButton
                key={`routeLeft-${index}`}
                navigation={navigation}
                state={state}
                index={+index + Math.ceil(filteredRoutes.length / 2)}
              />
            );
          })}
        </View>
        <View style={styles.tabBarContainerCircle}>
          <TabBarCircle />
        </View>
      </View>

      {/** Space at bottom on ios */}
      {Platform.OS === 'ios' && dimension.height >= 736 && (
        <View style={styles.tabBarAbsolute} />
      )}
    </>
  );
};

export default TabBar;
