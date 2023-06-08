import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Pressable, Text } from 'react-native';

export default function SelectNetwork(){
    return(
        <>
        <View style={styles.container}>
            <Text style={styles.title}>Selecciona la red de tu cuenta</Text>
            <Pressable style={styles.tpbutton}> Bitcoin </Pressable>
            <Pressable style={styles.tpbutton}> Ethereum </Pressable>
        </View>
        </>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#212121', 
    },
    title: {
      fontFamily: 'Futura',
      color: 'gray', 
      fontSize: 24,
      marginBottom: 20,
    },
    balanceItemWithSpace: {
      marginBottom: 10,
    },
    text: {
      fontSize: 20,
      color: 'white', 
      fontFamily: 'Futura',
      textAlign: 'center',
      marginBottom: 20,
      fontWeight: 'bold',
    },
    balanceLabel: {
      fontFamily: 'Futura',
      color: 'gray', 
      fontSize: 16,
      marginBottom: 5,
    },
    button: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#39FF14',
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 15,
      elevation: 2,
      marginBottom: 10,
      width: '80%',
    },
    tpbutton: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#39FF14',
      borderRadius: 8,
      paddingVertical: 10,
      paddingHorizontal: 15,
      elevation: 2,
      marginBottom: 10,
      width: '90%',
    },
    buttonText: {
      fontSize: 16,
      fontWeight: 'bold',
      color: 'black',
      fontFamily: 'Futura',
      letterSpacing: 1.5,
    },
    balanceItem: {
      fontFamily: 'Futura',
      flexDirection: 'column',
      alignItems: 'flex-start', 
      marginBottom: 10,
    },
    balanceValue: {
      fontFamily: 'Futura',
      color: 'gray', 
      fontSize: 24,
    },
     balanceContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    topUpButton: {
      backgroundColor: '#39FF14', 
      borderRadius: 8,
    },
  });