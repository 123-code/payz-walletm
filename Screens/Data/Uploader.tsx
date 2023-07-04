import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet,Pressable } from 'react-native';
import { Input } from 'native-base';
import { useNavigation } from '@react-navigation/native';


export default function Uploader() {
    <View style = {styles.container}>
        <Text style={styles.title}>Uploader</Text>
        

    </View>

}

const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 50,
    },
    inputContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    },
    input: {
      width: 60,
      textAlign: 'center',
      fontSize: 30,
    },
    title: {
      fontSize: 40,
      fontWeight: 'bold',
      color: 'black',
      fontFamily: 'Futura',
    },
    message: {
      fontSize: 16,
      paddingHorizontal: 30,
      fontFamily: 'Futura',
    }, button: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: 12,
      paddingHorizontal: 10,
      borderRadius: 4,
      elevation: 3,
      backgroundColor: 'black',
    },
    text: {
      fontSize: 16,
      lineHeight: 21,
      fontWeight: 'bold',
      letterSpacing: 0.25,
      color: 'white',
      fontFamily: 'Futura',
    },
  });