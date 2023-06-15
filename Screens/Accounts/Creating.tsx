import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet } from 'react-native';
import { Layout, Spinner } from '@ui-kitten/components';
import PayzButton from '../../Components/PayzButton';
import { GetInsertedData } from '../../util/SQLiteconn';
import { Encrypt } from '../../Components/Encrypt';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CreateScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [key, setKey] = useState('');
  const navigation = useNavigation();

 
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

return(
  <>
  
  </>
)

};

export default CreateScreen;

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