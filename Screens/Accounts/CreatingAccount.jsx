import React, { useState, useEffect } from 'react';
import { ActivityIndicator, StyleSheet, View, Text } from 'react-native';
import crypto from 'react-native-crypto';

export default function CreatingAccount() {
  const [publicKey, setPublicKey] = useState(null);

  useEffect(() => {
    const crypto = window.crypto || window.msCrypto;
    const generateKeys = async () => {
      const keyPair = await crypto.generateKeyPair('ec', { namedCurve: 'P-256' });
      const publicKeyData = await crypto.exportKey('spki', keyPair.publicKey);
      setPublicKey(publicKeyData);
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