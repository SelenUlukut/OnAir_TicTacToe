import { StyleSheet } from 'react-native';
import scale from '../../util/scale';

export default StyleSheet.create({
  square: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EE7777',
    borderWidth: 1,
    borderColor: 'black',
    height: scale(100),
    width: scale(100)
  },
  squareText: {
    fontSize: scale(70)
  }
});
