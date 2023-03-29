import React from 'react';
import { View, Text, StyleSheet,Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Stack, Button } from "@react-native-material/core";
import "@ethersproject/shims"
//pagomedios
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
<Stack>
  
</Stack>
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
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 80,
    backgroundColor: '#EEDED6',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  btncontainer: {
    flex: 1,
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