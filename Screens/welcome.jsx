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

               <Pressable style={styles.Pressable} onPress={()=>{navigation.navigate("PhoneNumberInput")}}> 
                <Text style={styles.buttontext}> SMS </Text>
               </Pressable>

            <Pressable style={styles.Pressable}>
            <Text style={styles.buttontext}> Sign up with Google </Text>
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
      },
      btncontainer:{
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
      },
    title:{
        fontSize: 40,
        fontWeight: 'bold',
        color: 'black',
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