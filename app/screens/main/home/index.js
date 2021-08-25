import React, {useContext, useState, useEffect} from 'react';
import {View, Image, TouchableOpacity} from 'react-native';

import {Context} from '../../../configs/context';
import styles from './styles';

import CamerModule from '../../../components/cameraModule';
import Gallery from '../../../components/gallery';
import ImageModal from '../../../components/imageModal';
import PaginationComponent from '../../../components/pagination';

import * as types from '../../../configs/redux/actionTypes';

import images from '../../../assests';

const HomePage = () => {
  const [state, dispatch] = useContext(Context);

  const [showModal, setModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);

  const [showCamera, setCameraModule] = useState(false);

  const [allImages, setAllImages] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(4);

  const [pageNumberLimit, setpageNumberLimit] = useState(4);
  const [maxPageNumberLimit, setmaxPageNumberLimit] = useState(4);
  const [minPageNumberLimit, setminPageNumberLimit] = useState(1);

  const pages = [];

  const handleModalOpen = (data) => {
    setModalImage(data);
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
    setAllImages(state.images);
  };

  const handlePagination = (data) => {
    setCurrentPage(data);
  };

  const doPrev = () => {
    setCurrentPage(currentPage - 1);

    if ((currentPage - 1) % pageNumberLimit === 0) {
      setmaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit - pageNumberLimit);
    }
  };

  const doNext = () => {
    setCurrentPage(currentPage + 1);

    if (currentPage + 1 > maxPageNumberLimit) {
      setmaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
      setminPageNumberLimit(minPageNumberLimit + pageNumberLimit);
    }
  };

  useEffect(() => {
    fetchImage();
    return () => {
      //TO:DO:- Write a clear state function.
    };
  }, [state.images]);

  for (let i = 1; i <= Math.ceil(allImages.length / itemsPerPage); i++) {
    pages.push(i);
  }

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;

  const currentItems = allImages.slice(indexOfFirstItem, indexOfLastItem);

  const MainView = () => {
    return (
      <View style={styles.container}>
        <View style={styles.galleryArea}>
          <Gallery images={currentItems} openModal={handleModalOpen} />
          <ImageModal showModal={showModal} handleModalClose={handleModalClose} modalImage={modalImage} />
        </View>
        <View style={{flex: 1, alignItems: 'center', backgroundColor: '#fff'}}>
          <PaginationComponent
            pages={pages}
            handlePagination={handlePagination}
            currentPage={currentPage}
            maxPageNumberLimit={maxPageNumberLimit}
            minPageNumberLimit={minPageNumberLimit}
            doPrev={doPrev}
            doNext={doNext}
          />
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
