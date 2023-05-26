import React,{useState,useEffect} from "react";
import { generateMnemonic, generateWallet } from '@coingrig/wallet-generator';
import { Text, Stack } from "@react-native-material/core";

export default function Select() {

      const [PublicKey, setPublicKey] = useState("");
      const [Address, setAddress] = useState("");

useEffect(()=>{
    //generateETHWallet();
},[])
      const generateETHWallet = async (): Promise<void> => {
        const words = 12; 
        const mnemonic = await generateMnemonic(words);
        const chain = 'ETH';
        let wallet = await generateWallet(mnemonic, chain);
        let  pwallet = JSON.parse(wallet);
        setAddress(pwallet.address); 
        console.log(pwallet.address)
        console.log("WALLET", wallet);

      };

    return (
        <>
       
         <Text variant="h2">Ingresando...</Text>
         <Text variant="h5">Dirección: {Address}</Text>
        
       

        </>
    )
}


