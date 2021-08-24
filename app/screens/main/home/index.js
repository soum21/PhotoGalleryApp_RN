import React, {useContext, useState, useEffect} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

import {Context} from '../../../configs/context';
import styles from './styles';

import CamerModule from '../../../components/cameraModule';
import Gallery from '../../../components/gallery';
import ImageModal from '../../../components/imageModal';

import * as types from '../../../configs/redux/actionTypes';

import images from '../../../assests';

const HomePage = () => {
  const [state, dispatch] = useContext(Context);
  const [showModal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [showCamera, setCameraModule] = useState(false);

  const handleModalOpen = (data) => {
    setModalImage(data)
    setModal(true);
  };

  const handleModalClose = () => {
    setModal(false);
  };

  const handleOpenCamera = () => {
    setCameraModule(true);
  };

  const handleCloseCamera = () => {
    setCameraModule(false);
  };

  const fetchImage = () => {
    dispatch({type: types.GET_IMAGES});
  };

  useEffect(() => {
    fetchImage();
    return () => {
      //TO:DO:- Write a clear state function.
    };
  }, [state.images]);

  const MainView = () => {
    return (
      <View style={styles.container}>
        <View style={styles.galleryArea}>
          <Gallery images={state.images} openModal={handleModalOpen} />
          <ImageModal showModal={showModal} handleModalClose={handleModalClose} modalImage={modalImage}/>
        </View>
        <View style={styles.buttonBox}>
          <TouchableOpacity onPress={handleOpenCamera} style={styles.roundButton1}>
            <Image style={styles.imageIcon} source={images.cameraIcon} />
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const GenerateView = () => {
    let renderView;
    switch (true) {
      case showCamera:
        renderView = <CamerModule handleCloseCamera={handleCloseCamera} />;
        break;
      case !showCamera:
        renderView = <MainView />;
        break;
    }
    return renderView;
  };
  return <GenerateView />;
};

export default HomePage;
