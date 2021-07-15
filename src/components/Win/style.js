import { StyleSheet } from 'react-native';
import scale from '../../util/scale';

export default StyleSheet.create({
  modalViewBackground: {
    backgroundColor: 'rgba(0,0,0,0.5)',
    height: scale(1000),
    justifyContent: 'center'
  },
  modalText: {
    fontSize: scale(25),
  },
  modalView: {
    backgroundColor: 'white',
    marginBottom: scale(300),
    marginHorizontal: scale(30),
    height: scale(400),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50
  },
  modalButton: {
    marginTop: scale(150),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#EE4444',
    borderRadius: 50,
    height: scale(60),
    width: scale(200)
  }
});
