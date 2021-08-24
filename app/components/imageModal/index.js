import React from 'react';
import {View, Image, Modal, Alert, StyleSheet, TouchableWithoutFeedback} from 'react-native';
import images from '../../assests';
import {getHeightRatio, getWidthByPercentage, getHeightByPercentage} from '../../configs/utils';

const ImageModal = ({showModal, handleModalClose, modalImage}) => {
  const handleCose = () => {
    handleModalClose();
  };

  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Modal animationType="slide" transparent={true} visible={showModal} onRequestClose={handleCose}>
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            <View style={styles.header}>
              <TouchableWithoutFeedback onPress={handleCose}>
                <Image style={styles.closeImage} source={images.closeImage} />
              </TouchableWithoutFeedback>
            </View>
            <View style={{alignItems: 'center'}}>
              <Image style={styles.itemImage} source={{uri: modalImage}} />
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
    alignItems: 'center'
  },
  modalContainer: {
    width: '90%',
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    elevation: 20
  },
  header: {
    width: '100%',
    height: getHeightRatio(40),
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  closeImage: {
    height: getHeightByPercentage(7),
    width: getWidthByPercentage(7)
  },
  itemImage: {
    paddingHorizontal: 20,
    paddingVertical: 20,
    borderRadius: 20,
    height: 300,
    width: 300
  }
});

export default ImageModal;
