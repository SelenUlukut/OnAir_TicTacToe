import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  parentStyle: {
    height: 735,
    justifyContent: 'flex-start',
    justifyContent: 'center',
  },
  titleText: {
    alignSelf: 'center',
    padding: 10,
    fontSize: 20,
    marginTop: 10
  },
  image: {
    width: 200,
    height: 100,
    alignSelf: 'center',
    resizeMode: 'contain',
    marginTop: 40
  },
  styleBoardSizeController: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  button: {
    width: 50,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize:20,
  },
  startButton: {
    width: '80%',
    height: 50,
    borderRadius: 20,
    backgroundColor: 'red',
    alignSelf: 'center',
    alignItems: 'center',
    justifyContent: 'center',
  }
});

