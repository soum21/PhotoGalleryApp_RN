import React from 'react';
import {View, Text, Image} from 'react-native';

import ImageCard from '../imageCard';
import allImages from '../../assests';


const Gallery = ({images,openModal}) => {
  if (!images.length) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center'
        }}>
          <Image style={{height:100 , width: 100}} source={allImages.noImage} />
        <Text style={{fontSize:15}}>No Images Available !</Text>
      </View>
    );
  }
  return (
    <View
      style={{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
      {images.map((image, i) => {
        return <ImageCard index={i} image={image} id={image.id} key={image.id} openModal={openModal}/>;
      })}
    </View>
  );
};

export default Gallery;
