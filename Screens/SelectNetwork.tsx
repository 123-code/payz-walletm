import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Pressable, Text } from 'react-native';

export default function SelectNetwork(){
    function OpenEthereumRPC(){
        
    }

    function OpenBitcoinRPC(){

    }

    
    return(
        <>
        <View>
            <Text>Selecciona la red de tu cuenta</Text>
            <Pressable> Bitcoin </Pressable>
            <Pressable> Ethereum </Pressable>
        </View>
        </>
    )
}