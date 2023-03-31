import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import { GenerateWallet } from '../../util/JavascriptKeyGen';
import {CheckInsertedData} from '../../util/SQLiteconn';
import PayzButton from '../../Components/PayzButton';
//Components/PayzButton.jsx
export default function CreatingAccount() {
  const [publicKey, setPublicKey] = useState(0);
  const [existente,setexistente] = useState(null);

  const navigation = useNavigation();

  const OnExistingButtonPress = ()=>{
    navigation.navigate('AccountSelector')
  }

  const OnNewButtonPress = ()=>{
    navigation.navigate('CreatingAccount')
  }


  const VerifyAccounts = async()=>{
    try{
      const accountverifying= await CheckInsertedData();
      if(accountverifying){
       setexistente(true)
      }
      else if(!accountverifying){
        setexistente(false)
      }

    }catch(err){
      console.error(err);
    }
  }

  useEffect(() => {
    try{
    VerifyAccounts();
    }catch(err){
      console.error(err);
    }
 
   
  }, []);

  if (!existente) {
    return (
    
      <View>
        <PayzButton label="Crear cuenta"/>
      </View>
    );
  }
  
  else if(existente){
    return (
 <>
 <View style={styles.header}>
 <Text style={styles.text}> Hemos detectado que has creado una cuenta anteriormente</Text>
 </View>
 <View style={styles.container}>
       <PayzButton label="Crear cuenta nueva"/>
<Text> {"o"} </Text>
       <PayzButton label="Usar cuenta existente" onPress={OnExistingButtonPress}/>
</View>
 </>

 
      
    );
  }

  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#EEDED6'
  },
  header:{
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