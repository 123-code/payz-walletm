import React,{useState} from 'react';
import { View, Text, StyleSheet,Pressable } from 'react-native';
import { Input } from 'native-base';

export default function AccountName(){
    const [AccountName,setAccountName] = useState("")
    
    const HandleInputChange = (ename,evalue)=>{
        setAccountName(evalue)
    }
    
    return(
        <>
        <Input mx={1}  w="100%"  style={styles.input} onChangeText={(text)=>HandleInputChange('AccountName',text)} />
        </>
    )
}

const styles = StyleSheet.create({
    input: {
        height: 50,
        margin: 12,
        borderWidth: 1,
        padding: 10,
        },
    });