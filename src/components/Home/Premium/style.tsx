import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  premiumContainer: {
    backgroundColor: '#24201A',
    height: 64,
    margin: 24,
    borderRadius: 12,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 20,
    paddingRight: 12,
  },
  iconContainer: {
    marginRight: 14,
  },
  notificationBadge: {
    width: 15,
    height: 15,
    borderRadius: 7.5,
    backgroundColor: 'rgba(232,44,19,0.9)',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    right: -5,
    top: -5,
  },
  badgeText: {
    fontFamily: 'Rubik-Regular',
    fontSize: 10,
    color: '#FFFFFF',
  },
  textContainer: {
    flex: 1,
  },
  premiumTitle: {
    fontSize: 16,
    fontFamily: 'SFProText-Semibold',
    lineHeight: 21,
    letterSpacing: -0.32,
  },
  premiumSubtitle: {
    fontSize: 14,
    fontFamily: 'SFProText-Regular',
    lineHeight: 16,
    letterSpacing: 0,
  },
});

export default styles;
