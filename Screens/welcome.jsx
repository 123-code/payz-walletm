import React from 'react';
import { View, Text, StyleSheet,Button,Pressable } from 'react-native';

const Welcome = () => {
    return(
        <>
         <View style={styles.container} >
            <Text style={styles.title}> Welcome to Payz"</Text>
            <Text style={styles.text}> Get started by creating a user account </Text>
            </View>
            <View style={ styles.btncontainer}> 
               <Pressable style={styles.Pressable}> 
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