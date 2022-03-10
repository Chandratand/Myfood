import React from 'react';
import {Dimensions, StyleSheet, Text, View} from 'react-native';
import Modal from 'react-native-modal';

const BottomSheetModal = ({show, close, children}) => {
  return (
    <Modal
      isVisible={show}
      onBackButtonPress={close}
      onSwipeComplete={close}
      onBackdropPress={close}
      swipeThreshold={150}
      useNativeDriver
      swipeDirection={['down']}
      style={styles.modalStyle}>
      <View style={styles.modalWrapper}>
        <View style={styles.modalSlider}>
          {/* <View style={styles.drag} /> */}
        </View>
        <View style={styles.modalContent}>{children}</View>
      </View>
    </Modal>
  );
};

export default BottomSheetModal;

const styles = StyleSheet.create({
  modalStyle: {
    marginHorizontal: 0,
    marginVertical: 0,
    justifyContent: 'flex-end',
  },
  modalWrapper: {
    minHeight: Dimensions.get('window').height * 0.4,
    minHeight: Dimensions.get('window').height * 0.75,
  },
  modalContent: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    flex: 1,
  },
  modalSlider: {
    paddingHorizontal: 15,
    paddingTop: 25,
    paddingBottom: 10,
    alignItems: 'center',
  },
});
