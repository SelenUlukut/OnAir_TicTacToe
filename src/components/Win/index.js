import React from 'react';
import { Modal, Text, View, TouchableOpacity } from 'react-native';
import styles from './style';
import { connect } from 'react-redux';
import { refreshBoard } from '@actions/board';

const Win = ({board , refreshBoard, visible, winner }) => (
  <Modal visible={visible} transparent>
    <View style={styles.modalViewBackground}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>{winner === 'TIE' ? 'TIE' : `${winner} WIN !!!`}</Text>
        <TouchableOpacity style={styles.modalButton}>
          <Text
            style={styles.modalText}
            onPress = {() => {
              refreshBoard();
            }}
          >
            Restart
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  </Modal>
);


const mapStateToProps = (state) => ({
  board: state.board,
});

export default connect(mapStateToProps, {
  refreshBoard,
})(Win);