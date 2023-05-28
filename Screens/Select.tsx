import React,{useState,useEffect} from "react";
import { generateMnemonic, generateWallet } from '@coingrig/wallet-generator';
import { Text } from "@react-native-material/core";
import AsyncStorage from '@react-native-async-storage/async-storage';


export default function Select() {

      const [PublicKey, setPublicKey] = useState("");
      const [Address, setAddress] = useState("");


useEffect(()=>{
     generateETHWallet();

},[])
 


const StoreData = async (key: string, value: string): Promise<void> => {
    try {
      await AsyncStorage.setItem(key, value);
      console.log('Data stored successfully');
    } catch (err) {
      console.error('Error storing data:', err);
    }
  }; 


        const generateETHWallet = async (): Promise<void> => {
            const words = 12; 
            const mnemonic = await generateMnemonic(words);
            const chain = 'ETH';
            let wallet = await generateWallet(mnemonic, chain);
            let  pwallet = JSON.parse(wallet);
            setAddress(pwallet.address); 
          
            StoreData("PrivateKey",pwallet.privateKey);
            return pwallet.privateKey;
        };

    return (
        <>
         <Text variant="h2">Ingresando...</Text>
         <Text variant="h5">Dirección: {Address}</Text>
        </>
    )
}


