import React from 'react';
import {Image, View, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import {getHeightRatio, getWidthByPercentage, getHeightByPercentage} from '../../configs/utils';

const ImageCard = ({image, index, id}) => {
  const cardGap = 16;
  const cardWidth = (Dimensions.get('window').width - cardGap * 3) / 2;
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
      <TouchableOpacity>
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
    // border: '1px solid black'
  }
});

export default ImageCard;
