import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet,Pressable } from 'react-native';



export async function GetWalletValues(account){
    const testbalanceURL = "https://blockstream.info/api/address/"
    const walletaddress = await fetch(`${testbalanceURL}${account}`)
    const walletinfo = await walletaddress.json()
    const getwalletBalance = (walletinfo.chain_stats.funded_txo_sum - walletinfo.chain_stats.spent_txo_sum) - (walletinfo.mempool_stats.funded_txo_sum - walletinfo.mempool_stats.spent_txo_sum)
    const currencyValues = await fetch("https://blockchain.info/ticker")
    const currencyValuesJSON = await currencyValues.json()
    const currencyValue = currencyValuesJSON.USD.last
    const walletBTCBalance = await fetch(`https://blockchain.info/tobtc?currency=USD&value=${currencyValue}`)
    const BTCBalance = await walletBTCBalance.json()
    console.log("BTCValue",BTCBalance)
    console.log("USDValue",currencyValue)
    console.log("WALLET BALANCE:",getwalletBalance);
}


export default async function WalletBalance({account}) {
//const BTCEndpointURL = "https://btc.getblock.io/a04435a5-0be8-4c8b-aec5-8e0be40c0be9/mainnet/"
await GetWalletValues(account)
    return(
        <>
        </>
    )
}