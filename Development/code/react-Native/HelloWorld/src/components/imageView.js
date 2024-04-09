import { StyleSheet, View, Image } from "react-native"

export default function ImageView({ displayImg, defaultImg }){

    

    const imageSource = displayImg ? { uri: displayImg } : defaultImg

    return (
        <View style={styles.imageContainer}>
            <Image source={imageSource} style={styles.image}/>
        </View>
    )
}

const styles = StyleSheet.create({
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
})