import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Pressable, Text } from 'react-native';
import { Input } from 'native-base';
import PayzButton from '../../Components/PayzButton';
import { StoreAccountName } from '../../util/StoreAccountDetails'

export default function AccountName() {
  const [AccountName, setAccountName] = useState('');

  const StoreMyName = async (name:any)=>{
    try{
      await StoreAccountName(name)
    }catch(err){
      console.error(err)
    }
   
  }

  const handleNameChange = (text:any) => {
    setAccountName(text);
  };
  //procedimiento de gestion de activos automatizado 
  // clasificacion
  //categorizacion 
  //valoracion 
  //inventario
  return (
    <>
        <View style={styles.container}>
        <Text style={styles.text}> Dale un nombre a tu nueva cuenta:</Text>
        </View>
  
      <View style={styles.container}>
      
        <TextInput   onChangeText={StoreMyName} style={styles.input} placeholder="nombre" />
      </View>
      <PayzButton onPress={console.log("o")} label="Listo"/>
   
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 300,
    height: 50,
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'black',
    paddingHorizontal: 16,
    fontSize: 20,
    marginBottom: 50,
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  text: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Futura',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#000000',
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 100, // Adjust this value to move the button up or down
  },
  
});