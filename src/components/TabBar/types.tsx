import {BottomTabNavigationEventMap} from '@react-navigation/bottom-tabs';
import {
  NavigationHelpers,
  ParamListBase,
  TabNavigationState,
} from '@react-navigation/native';

export type StateRoutesMapParams = {
  index: number;
  state: TabNavigationState<ParamListBase>;
  navigation: NavigationHelpers<ParamListBase, BottomTabNavigationEventMap>;
};

export type TabBarButtonProps = {
  fill: string;
  code: string;
  text: string;
};
