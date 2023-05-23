import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet,Pressable } from 'react-native';
import { Input } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import PayzButton from '../Components/PayzButton';
import { Layout,Spinner } from '@ui-kitten/components';

export default function WelcomeBack() {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.container}>
      <Text style={styles.title}>Bienvenido de vuelta</Text>
      </View>
      <View style={styles.inputContainer}>
      </View>
      <Text style={styles.text1}>Ingresando a tu cuenta...</Text>
      <Pressable style={styles.button}> 
      <Text>  Listo
      <Spinner size='giant' />
      </Text> 
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
    backgroundColor: '#000000',
    height: 60,
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 20,
    marginBottom: 100, 
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
  text1: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  }
});