import React from 'react';
import {Image, View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {getHeightRatio} from '../../configs/utils';

const ImageCard = ({image, index, id, openModal}) => {
  const cardGap = 16;
  const cardWidth = (Dimensions.get('window').width - cardGap * 3) / 2;

  const handleModal = () => {
    openModal(image.imageName);
  };

  return (
    <View
      style={[
        styles.cardView,
        {
          marginTop: cardGap,
          width: cardWidth,
          marginLeft: index % 2 !== 0 ? cardGap : 0
        }
      ]}>
      <TouchableOpacity onPress={handleModal}>
        <Image style={[styles.cardView, {width: cardWidth}]} source={{uri: image.imageName}} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cardView: {
    height: getHeightRatio(180),
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default ImageCard;
