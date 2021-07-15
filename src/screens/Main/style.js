import {StyleSheet} from 'react-native';
import scale from '../../util/scale';

export default StyleSheet.create({
  parentStyle: {
    height: scale(838),
    justifyContent: 'flex-start',
    justifyContent: 'center',
  },
  titleText: {
    alignSelf: 'center',
    padding: scale(10),
    fontSize: scale(20),
    marginTop: scale(10)
  },
  image: {
    width: scale(200),
    height: scale(100),
    alignSelf: 'center',
    resizeMode: 'contain',
  },
  styleBoardSizeController: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    width: scale(50),
    height: scale(50),
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize:scale(20),
  },
  startButton: {
    width: '80%',
    height: scale(50),
    borderRadius: 50,
    backgroundColor: '#EE4444',
    borderRadius: 50,
    height: scale(50),
    width: scale(300),
    marginVertical: scale(50),
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

