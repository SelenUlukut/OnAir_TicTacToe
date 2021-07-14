import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  modalViewBackground: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: 1000,
    justifyContent: 'center'
  },
  modalText: {
    fontSize: 25,
  },
  modalView: {
    backgroundColor: 'white',
    marginBottom: 300,
    marginHorizontal: 30,
    height: 400,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  },
  modalButton: {
    marginTop: 150,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EE5555',
    borderRadius: 50,
    height:70,
    width: 200
  }
});
