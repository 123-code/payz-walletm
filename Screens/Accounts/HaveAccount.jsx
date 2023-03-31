import React,{useState,useEffect} from 'react';
import { View,Text, Pressable, StyleSheet } from 'react-native';
import {GetInsertedData} from '../../util/SQLiteconn';


export default function HaveAccount(){
    const [items,setitems] = useState([]);
  


const getAccountItems = async ()=>{
    const getitems = await GetInsertedData();
    setitems(getitems);
    console.log("items");
}

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
               <Text>Selecciona una de tus cuentas</Text>
            
                {items.map((item,index)=>{
                return(
                    <Text key={index}>{item}</Text>
                )
                })}
            
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

