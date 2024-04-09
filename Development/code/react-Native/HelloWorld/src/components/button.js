import { StyleSheet, View, Pressable, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'

export default function Button({ label, theme }) {

    if(theme === 'primary'){
        return(
            <View style={[styles.buttonContainer, {borderColor: '#fff'}]}>
                <Pressable
                    style={[styles.button, {backgroundColor:'#fff'}]}
                    onPress={() => alert('You pressed a button.')}
                >
                    <FontAwesome
                        name='picture-o'
                        size={18}
                        color='#25292e'
                        style={styles.buttonIcon}
                    />
                    <Text style={[styles.buttonLabel, {color:'#25292e'}]}>{label}</Text>
                </Pressable>
            </View>
        )
    }

  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert('Hehe ... that tickled ..')}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    alignSelf:'center',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontFamily:'Menlo',
  },
});