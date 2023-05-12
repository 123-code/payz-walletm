import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet,Pressable } from 'react-native';
import { Input } from 'native-base';

import {encryptPassword} from '../util/GetPinHash';
import { useNavigation } from '@react-navigation/native';
import PayzButton from '../Components/PayzButton';

export default function HasAccountWelcome() {
  const navigation = useNavigation();
  const [numbers, setNumbers] = useState({
    Number1: 0,
    Number2: 0,
    Number3: 0,
    Number4: 0,
  });

const HandleInputChange = (ename,evalue)=>{
  setNumbers({
    ...numbers,
    [ename]:evalue
  })
}

const HandleSubmit = async () => {

  try{
  encryptPassword(numbers.Number1, numbers.Number2, numbers.Number3, numbers.Number4);
  navigation.navigate('ViewAccount')
 
  }catch(err){
    console.error(err);
  }
};

  return (
    <>
      <View style={styles.container}>
      <Text style={styles.title}>Ingresa tu PIN</Text>
      <Text style={styles.message}>
       {`Ingresa tu PIN para acceder a tu cuenta`}
     </Text>
      </View>

      <View style={styles.inputContainer}>
        <Input mx={1}  w="20%"  style={styles.input} onChangeText={(text)=>HandleInputChange('Number1',text)} />
        <Input mx={1}  w="20%"  style={styles.input} onChangeText={(text)=>HandleInputChange('Number2',text)} />
        <Input mx={1}  w="20%"  style={styles.input} onChangeText={(text)=>HandleInputChange('Number3',text)} />
        <Input mx={1}  w="20%" style={styles.input} onChangeText={(text)=>HandleInputChange('Number4',text)} />
      </View>
      <PayzButton label="Listo" onPress={HandleSubmit}/>
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
    marginVertical: 40,
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
  },
});