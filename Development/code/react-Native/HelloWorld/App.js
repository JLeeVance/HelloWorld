import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';

import Header from './src/components/header';
import Button from './src/components/button';

const testImage = require('./assets/reactNativeTestRun.jpg')

export default function App() {
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.imageContainer}>
        <Image source={testImage} style={styles.image}/>
      </View>
      <Button label='Choose personal photo' theme='primary' />
      <Button label='Use this photo' theme='none' />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e'
  },
  imageContainer:{
    flex:1,
    paddingTop:30,
    alignItems:'center'
  },
  image:{
    borderRadius:18,
    width: '90%',
    height: '80%'
  }
});
