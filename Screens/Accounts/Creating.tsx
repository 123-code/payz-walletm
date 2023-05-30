import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text,StyleSheet } from 'react-native';
import { Layout,Spinner } from '@ui-kitten/components';
import  PayzButton  from '../../Components/PayzButton';
import { GetInsertedData } from '../../util/SQLiteconn';


const CreateScreen = () => {
  const [isLoading, setIsLoading] = useState(true);
  const[account,setaccount] = useState(null);
    const navigation = useNavigation();


    const getAccountItems = async () => {
        try {
          const items = await GetInsertedData();
          console.log("items:", items);
          const accounts = items.map((item) => item.hash);
          console.log("Accounts: ", accounts);
          setaccount(accounts[accounts.length-1]);
        console.log("Account: ", account);
        } catch (error) {
          console.error(error);
        }
      };


  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);


    useEffect(() => {
        getAccountItems();
    })
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