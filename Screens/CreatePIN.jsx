import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet,Pressable } from 'react-native';
import { Input } from 'native-base';
import {CreateSQLiteTable}  from '../util/SQLiteconn'

import * as SQLite from 'expo-sqlite';

export default function CreatePIN() {
  const [numbers, setNumbers] = useState({
    Number1: 0,
    Number2: 0,
    Number3: 0,
    Number4: 0,
  });


   function SQLiteDatabaseConn(){
    return openDatabase({name: 'todo-data.db', location: 'default'});
}



const HandleInputChange = (ename,evalue)=>{
  setNumbers({
    ...numbers,
    [ename]:evalue
  })
}


 const HandleSubmit = async () => {
  try{
    CreateSQLiteTable();
  }catch(err){
    console.error(err);
  }
  };


  return (
    <>
      <View style={styles.container}>
      <Text style={styles.title}>Crea un PIN</Text>
      <Text style={styles.message}>
       {`Tu pin proveerá seguridad adicional para que accedas a tu cuenta`}
     </Text>
      </View>

      <View style={styles.inputContainer}>
        <Input mx={1}  w="20%"  style={styles.input} onChangeText={(text)=>HandleInputChange('Number1',text)} />
        <Input mx={1}  w="20%"  style={styles.input} onChangeText={(text)=>HandleInputChange('Number2',text)} />
        <Input mx={2}  w="20%"  style={styles.input} onChangeText={(text)=>HandleInputChange('Number3',text)} />
        <Input mx={2}  w="20%" style={styles.input} onChangeText={(text)=>HandleInputChange('Number4',text)} />
      </View>
      
      <Pressable style={styles.button} onPress={HandleSubmit}>
             <Text style={styles.text}> Listo </Text> 
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