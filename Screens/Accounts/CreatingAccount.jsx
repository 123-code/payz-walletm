import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import { generateMnemonic, generateWallet } from '@coingrig/wallet-generator';


export default function CreatingAccount() {
  const [publicKey, setPublicKey] = useState(null);

  useEffect(() => {
 
    const generateKeys = async () => {
      try{
        const words = 12; // or 24
        const mnemonic = await generateMnemonic(words);
        
        // Generate wallet
        const chain = 'BTC' // or ETH
        let wallet = await generateWallet(mnemonic, chain);
        wallet = JSON.parse(wallet);
        console.log(wallet.address, wallet.privateKey);
      }catch(err){console.error(err)}
    
    };
    generateKeys();
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
      <Text style={styles.text}>Public Key: {JSON.stringify(publicKey)}</Text>
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