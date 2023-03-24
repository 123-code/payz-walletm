import React from 'react';
import { View, Text, StyleSheet,Button,Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import "@ethersproject/shims"
const Welcome = () => {
    const navigation = useNavigation();
    return(
        <>
         <View style={styles.container} >
            <Text style={styles.title}> Bienvenido a Payz</Text>
            <Text style={styles.text}> verifica tu número celular para empezar  </Text>
            </View>

            <View style={ styles.btncontainer}> 
<Text style={styles.text}> Ingresa con </Text>
            <Pressable
  style={({ pressed }) => [
    {
      backgroundColor: pressed ? '#add8e6' : '#87cefa',
      borderRadius: 10,
      padding: 10,
    },
    styles.Pressable,
  ]}
  onPress={() => {
    navigation.navigate('PhoneNumberInput');
  }}>
  <Text style={styles.buttontext}> SMS </Text>
</Pressable>


            </View>
        </>
    )
}
export default Welcome;

const styles = StyleSheet.create({
    container: {
        flex: 3,
        alignItems: 'left',
        justifyContent: 'left',
        padding: 80,
        backgroundColor: "#EEDED6",
      },
      btncontainer:{
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#EEDED6",
      },
    title:{
        fontSize: 40,
        fontWeight: 'bold',
        color: 'green',
        fontFamily:'Futura'
    },
    text:{
        fontSize: 30,
        color: 'black',
        fontFamily:'Futura',
    },
    button:{
        fontSize: 30,
        color: 'black',
        fontFamily:'Futura',

    },
    buttontext:{
        fontSize: 30,
        color: 'white',
        fontFamily:'Futura',
    },
    Pressable:{
        backgroundColor: 'black',
     

    }
    
})