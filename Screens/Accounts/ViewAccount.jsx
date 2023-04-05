import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet,Pressable } from 'react-native';
import {GetWalletBTCBalance} from '../../util/GetWalletBTCBalance';




export default function ViewAccount() {
    return(
        <>
        <View style={styles.container}>
            <Text style={styles.text}>Mi Cuenta</Text>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      backgroundColor: '#EEDED6'
    },
    horizontal: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      padding: 10,
    },
    text:{
      fontSize: 20,
      color: 'black',
      fontFamily:'Futura',
      justifyContent: 'center',
      alignItems: 'center',
    }
  });