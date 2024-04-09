import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View} from 'react-native';
import { useState } from 'react';

import Header from './src/components/header';
import Button from './src/components/button';
import ImageView from './src/components/imageView';

import * as ImagePicker from 'expo-image-picker'
const testImage = require('./assets/reactNativeTestRun.jpg')

export default function App() {

  const [ selectedPhoto, setSelectedPhoto ] = useState(null)
  const [ defaultShowing, setDefaultShowing ] = useState(true)


  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing:true,
      quality:1
    });

    if(!result.canceled){
      let uri = result.assets[0].uri
      setSelectedPhoto(uri)
      setDefaultShowing(false)
    }else{
      alert('You did not select an image!')
    }
  }

  const handleDefaultRevert = () => {
    setSelectedPhoto(null)
    setDefaultShowing(true)
  }


  return (
    <View style={styles.container}>
      <Header/>
      <ImageView displayImg={selectedPhoto} defaultImg={testImage} />
      <Button label={!selectedPhoto ? 'Select photo from device' : 'Choose another photo'} theme='primary' onPress={pickImage}/>
      <Button label={defaultShowing ? 'Use this photo' : 'Use Default Photo'} theme='none' onPress={handleDefaultRevert} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e'
  }
});
