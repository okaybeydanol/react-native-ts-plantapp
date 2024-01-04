import {StyleSheet} from 'react-native';
import {dimension} from '@src/constants/dimensions';

const styles = StyleSheet.create({
  flatListContainer: {
    flex: 1,
    marginLeft: 24,
    marginTop: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  container: {
    borderColor: 'rgba(41, 187, 137, 0.18)',
    borderWidth: 0.5,
    backgroundColor: '#F4F6F6',
    borderRadius: 12,
    marginRight: 11,
    width: (dimension.width - 59) / 2,
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 16,
  },
  imageBackground: {
    width: '100%',
    height: 152,
    paddingLeft: 16,
    paddingRight: 56,
    paddingVertical: 16,
  },
  questionText: {
    fontSize: 16,
    fontFamily: 'Rubik-Medium',
    lineHeight: 21,
    letterSpacing: -0.32,
    color: '#13231B',
  },
});

export default styles;
