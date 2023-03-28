import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import { GenerateWallet } from '../../util/JavascriptKeyGen';


export default function CreatingAccount() {
  const [publicKey, setPublicKey] = useState(0);

  useEffect(() => {
    try{
      GenerateWallet();
      setPublicKey(GenerateWallet());
    }catch(err){
      console.error(err);
    }
 
   
  }, []);

  if (!publicKey) {
    return (
      <View>
        <Text style={styles.text}>Creando tu cuenta</Text>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    );
  }
  

  return (
    <View>
      <Text style={styles.text}>publicKey</Text>
    </View>
  );
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
    fontSize: 30,
    color: 'black',
    fontFamily:'Futura',
    justifyContent: 'center',
    alignItems: 'center',
  }
});