import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

const PayzButton = ({ onPress, label }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};


export const PayzBlackButton = ({ onPress, label }) => {
  return (
    <Pressable onPress={onPress} style={styles.blackbutton}>
      <Text style={styles.whitelabel}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#39FF14',
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 100, 
  },
  blackbutton: {
    backgroundColor: 'black',
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 100, 
  },
  whitelabel: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
   
  },
  smallbutton: {
    backgroundColor: '#000000',
    height: 20,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  label: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
   
  },
});

export const SmallButton = ({onPress,label})=>{
  return (
    <Pressable onPress={onPress} style={styles.smallbutton}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};


export default PayzButton;