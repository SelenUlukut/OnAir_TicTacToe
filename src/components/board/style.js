import { StyleSheet } from 'react-native';
import scale from '../../util/scale';

export default StyleSheet.create({
  board: {
    marginVertical: scale(20),
    marginHorizontal: scale(20),
    alignSelf: 'center',
    justifyContent: 'flex-start'
  },
});
