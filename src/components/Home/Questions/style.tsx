import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    paddingTop: 16,
    paddingLeft: 24,
    paddingRight: 6,
  },
  headingText: {
    fontSize: 15,
    fontFamily: 'Rubik-Medium',
    lineHeight: 20,
    letterSpacing: -0.24,
    color: '#13231B',
    marginLeft: 24,
  },
  imageBackground: {
    width: 240,
    height: 164,
    marginRight: 16,
    borderRadius: 16,
    overflow: 'hidden',
  },
  questionText: {
    fontSize: 15,
    fontFamily: 'Rubik-Regular',
    lineHeight: 20,
    letterSpacing: -0.24,
    color: '#FFF',
    position: 'absolute',
    bottom: 13,
    paddingHorizontal: 14,
  },
});

export default styles;
