import React,{useState,useEffect} from 'react';
import { View,Text, Pressable, StyleSheet } from 'react-native';
import {GetInsertedData} from '../../util/SQLiteconn';
import {TopUpButton} from '../../Components/TopUpButton';
export default function AccountCreated() {
    const [Account,SetAccount] = useState([]);

    const GetAccount = async()=>{
       const account =  await GetInsertedData();
       const NewAccount = account[account.length-1]
       console.log("ACCOUNT:",NewAccount)
       SetAccount(NewAccount)
    }
  
    useEffect(()=>{
        GetAccount()
    },[])

   
 
return(
    <>
    <View style={styles.container}>
<Text style={styles.text}> Usando: {Account.hash} </Text>
<TopUpButton/>
    </View>
    </>
)
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'flex-start',
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