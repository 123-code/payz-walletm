import React from 'react';
import { View, Text, StyleSheet,Pressable } from 'react-native';
import { Input } from 'native-base';

export default function CreatePIN() {
  return (
    <>
      <View style={styles.container}>
      <Text style={styles.title}>Create a PIN</Text>
      </View>

      <View style={styles.inputContainer}>
        <Input mx={1}  w="20%"  style={styles.input} />
        <Input mx={1}  w="20%"  style={styles.input} />
        <Input mx={2}  w="20%"  style={styles.input} />
        <Input mx={2}   w="20%" style={styles.input} />
      </View>
      
      <Pressable>
             <Text>Press </Text> 
        </Pressable>
    </>
  );
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
});