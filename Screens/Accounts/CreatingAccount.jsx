import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import { GenerateWallet } from '../../util/JavascriptKeyGen';
import {GetInsertedData} from '../../util/SQLiteconn';
import PayzButton from '../../Components/PayzButton';
//Components/PayzButton.jsx
export default function CreatingAccount() {
  const [publicKey, setPublicKey] = useState(0);
  const [existente,setexistente] = useState(null);



  const VerifyAccounts = async()=>{
    try{
      const accountverifying= await GetInsertedData();
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
      //GenerateWallet();
    //  setPublicKey(GenerateWallet());
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
      <View>
      <Text style={styles.text}> Hemos detectado que has creado una cuenta anteriormente</Text>
       <PayzButton label="Crear cuenta nueva"/>
<Text> {"o"} </Text>
       <PayzButton label="Usar cuenta existente"/>
      </View>
    );
  }

  
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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