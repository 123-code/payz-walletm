import React from 'react';
import { Text, Pressable, StyleSheet } from 'react-native';

const AccountSelector = ({ onPress, label }) => {
  return (
    <div style={styles.container}>
    <Pressable onPress={onPress} style={styles.button}>
      <Text style={styles.label}>{label}</Text>
    </Pressable>
    </div>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
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

export default AccountSelector;