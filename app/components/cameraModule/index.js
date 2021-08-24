import React, {useState, useContext, useCallback} from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity, ActivityIndicator} from 'react-native';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';
import {Context} from '../../configs/context';
import {getHeightRatio, getWidthByPercentage, getHeightByPercentage} from '../../configs/utils';
import images from '../../assests';
import * as types from '../../configs/redux/actionTypes';

const CameraModule = ({handleCloseCamera}) => {
  const [state, dispatch] = useContext(Context);

  const [{cameraRef}, {takePicture}] = useCamera(null);
  const [flipType, setFlipType] = useState(RNCamera.Constants.Type.back);

  const handleBack = () =>{
    handleCloseCamera();
  }

  const generateRandomNumber = () => {
    let val = Math.floor(100000000 + Math.random() * 900000000);
    return val;
  };

  const handleFlip = useCallback(() => {
    if (flipType === RNCamera.Constants.Type.back) {
      setFlipType(RNCamera.Constants.Type.front);
    }
    if (flipType === RNCamera.Constants.Type.front) {
      setFlipType(RNCamera.Constants.Type.back);
    }
  }, [flipType]);

  const takePhoto = async () => {
    try {
      const options = {quality: 0.5, base64: true};
      const data = await takePicture(options);
      if (data.uri) {
        let imageData = {
          id: generateRandomNumber(),
          imageName: data.uri,
          base64: data.base64
        };
        dispatch({type: types.SET_IMAGES, payload:imageData});
        handleCloseCamera();
      }
    } catch (err) {
      console.log(err);
    }
  };

  const CameraButtons = () => {
    return (
      <View style={{flex: 0, flexDirection: 'row', justifyContent: 'center'}}>
        <TouchableOpacity onPress={handleFlip} style={styles.buttonContainer}>
          <Image style={styles.imageIcon} source={images.flipImage} />
        </TouchableOpacity>
        <TouchableOpacity onPress={takePhoto} style={styles.buttonContainer}>
          <Image style={styles.imageIcon} source={images.takePic} />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleBack} style={styles.buttonContainer}>
          <Image style={styles.imageIcon} source={images.goBack} />
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.body}>
      {/* <View style={styles.backDrop}>
      <ActivityIndicator size="large" color="#0000ff" />
      </View> */}
      <RNCamera ref={cameraRef} type={flipType} style={styles.cameraPreview} captureAudio={false}>
        <CameraButtons />
      </RNCamera>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: 'black'
  },
  backDrop: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 9999,
    flexDirection: 'column'
  },
  cameraPreview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  buttonContainer: {
    flex: 0,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
    margin: 20,
    width: getWidthByPercentage(22),
    height: getHeightByPercentage(13),
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    borderRadius: 100,
    overflow: "hidden",
    borderWidth: 3,
    borderColor: "darkorange"
  },
  imageIcon: {
    width: getHeightRatio(50),
    height: getHeightRatio(50)
  }
});

export default CameraModule;
