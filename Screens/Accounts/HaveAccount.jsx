import React,{useState,useEffect} from 'react';
import { View,Text, Pressable, StyleSheet } from 'react-native';
import {CheckInsertedData} from '../../util/SQLiteconn';


export default function HaveAccount(){
    
    useEffect(async()=>{
        try{
            const items = [];
            await CheckInsertedData();
        }catch(err){
        console.error(err)
    }

    },[])
    return(
        <>
        <View>
               <Text>Selecciona una de tus cuentas</Text>
            
                {items.map((item,index)=>{
                return(
                    <Text key={index}>{item}</Text>
                )
                })}
            
        </View>
        </>
    )
}

