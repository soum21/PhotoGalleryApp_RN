import React, {useContext} from 'react';
import { View, Text } from 'react-native'
import { Context } from '../../../configs/context';
import styles from './styles';
const HomePage = () => {
    const [state, dispatch] = useContext(Context);
    console.log(state);
    return (
        <View
        style={styles.container}>
        <View style={styles.galleryArea}>
          <Text>asd</Text>
        </View>
        <View style={styles.buttonBox}>
          <Text>asddasd</Text>
        </View>
      </View>
    )
}

export default HomePage
