import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  featureItem: {
    width: 156,
    height: 130,
    backgroundColor: 'rgba(255, 255, 255, 0.08)',
    marginRight: 8,
    borderRadius: 14,
    padding: 16,
  },
  iconContainer: {
    width: 36,
    height: 36,
    backgroundColor: 'rgba(0, 0, 0, 0.24)',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 9,
    marginBottom: 16,
  },
  itemName: {
    color: '#fff',
    fontFamily: 'Rubik-Medium',
    lineHeight: 24,
    fontSize: 20,
    letterSpacing: 0.38,
    marginBottom: 2,
  },
  itemDesc: {
    color: 'rgba(255, 255, 255, 0.7)',
    fontFamily: 'Rubik-Regular',
    lineHeight: 18,
    fontSize: 13,
    letterSpacing: -0.08,
  },
});

export default styles;
