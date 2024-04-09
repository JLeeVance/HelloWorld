import { StyleSheet, View, Pressable, Text } from 'react-native';

export default function Button({ label, theme }) {

    if(theme === 'primary'){
        return(
            <View style={[styles.buttonContainer, { borderWidth: 4, borderColor: '#fff'}]}>
                <Pressable
                    style={[styles.button, {backgroundColor:'#fff'}]}
                    onPress={() => alert('You pressed a button.')}
                >


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
    backgroundColor:'lightgrey'
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
    color: 'darkgreen',
    fontFamily:'Menlo',
  },
});