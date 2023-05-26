import React from 'react';
import { View, StyleSheet,Pressable,Image,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text, Stack } from "@react-native-material/core";
import "@ethersproject/shims"
//pagomedios
const Welcome = () => {
    const navigation = useNavigation();
    return(
        <>
         <View style={styles.container} >
            <Text  variant="h1" style={styles.title}> Bienvenido a Payz</Text>
            <Text> </Text>
            <Text variant="h1" style={styles.text}> verifica tu número celular para ingresar  </Text>
            </View>
            <View style={ styles.btncontainer}> 
<Text style={styles.text}> Ingresa con </Text>
<Text>
  
</Text>
<Pressable  
  style={styles.Pressable}


  onPress={() => {
    navigation.navigate('PhoneNumberInput');
  }}>
  <Text style={styles.buttontext}> SMS </Text>
</Pressable>

<Text>
  
</Text>

<TouchableOpacity style={styles.buttonContainer}>
      <Image
        style={styles.googleLogo}
        source={{
          uri: 'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=1190&height=800&name=image8-2.jpg',
        }}
      />
      <Text style={styles.buttonText}>Ingresa con Google</Text>
    </TouchableOpacity>




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
        borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 15,
      elevation: 2,
    

    }, buttonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#ffffff',
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 15,
      elevation: 2,
    },
    googleLogo: {
      width: 24,
      height: 24,
      marginRight: 10,
    },
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: '#000000',
    },
})