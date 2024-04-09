import { Text, View, StyleSheet } from "react-native";

export default function Header(){
    return (
        <View>
            <Text style={style.header}>React Test Run</Text>
        </View>
    )
}

const style = StyleSheet.create({
    header:{
        fontSize:40,
        color:'white',
        alignSelf:'center',
        marginTop:'12%'
        
    }
})