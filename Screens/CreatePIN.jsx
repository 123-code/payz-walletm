import React from 'react';
import { View, Text, StyleSheet,Button,Pressable } from 'react-native';
import { Input } from 'native-base';
export default function CreatePIN() {
return(
    <>
        <View style={styles.container} >
            <Text style={styles.title}> Create a PIN</Text>
        </View>

        <View>
       <Input mx="3" placeholder="Input" w="100%" />
        </View>
    </>
)
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
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