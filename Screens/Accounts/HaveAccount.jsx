import React,{useState,useEffect} from 'react';
import { View,Text, Pressable, StyleSheet } from 'react-native';
import {GetInsertedData} from '../../util/SQLiteconn';
import {SmallButton} from '../../Components/PayzButton';


export default function HaveAccount(){
    const [items,setitems] = useState([]);
    const [accounts,setaccounts] = useState([]);
  


    const getAccountItems = async () => {
        try {
          const items = await GetInsertedData();
          console.log("items:", items);
          const accounts = items.map((item) => item.hash);
          console.log("Accounts: ", accounts);
          setitems(items.accounts);
          setaccounts(accounts);
        } catch (error) {
          console.error(error);
        }
      };




    useEffect(()=>{
        try{
             getAccountItems();
            //await CheckInsertedData();
        }catch(err){
        console.error(err)
    }

    },[])
    return(
        <>
        <View style={styles.container}>
        <View>
               <Text style={styles.text}>Selecciona una de tus cuentas</Text>
            
                <Text style={styles.text}> Cuenta: {accounts.map((account,index)=>{
                    return(
                        <SmallButton label={account}>
                        <Text key={index}>{account}</Text>
                        </SmallButton>
                        
                    )
                })} </Text>
            
        </View>
        </View>
        </>
        
    )
}
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

