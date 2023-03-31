import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

const PayzButton = ({ onPress, label }) => {
  return (
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#000000',
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
  },
  label: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: 'bold',
   
  },
});

export default PayzButton;