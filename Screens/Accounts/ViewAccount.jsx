import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet,Pressable } from 'react-native';
import {GetWalletBTCBalance} from '../../util/GetWalletBTCBalance';
import WalletBalance from '../../Components/WalletBalance';



export default function ViewAccount() {
  const[USDBalance,setUSDBalance] = useState(null)
  const[BTCBalance,setBTCBalance] = useState(null)
  const[SATBalance,setSATBalance] = useState(null)

  useEffect(()=>{
    async function GetWalletValues(account){
      const testbalanceURL = "https://blockstream.info/api/address/"
      const walletaddress = await fetch(`${testbalanceURL}${account}`)
      const walletinfo = await walletaddress.json()
      const getwalletBalance = (walletinfo.chain_stats.funded_txo_sum - walletinfo.chain_stats.spent_txo_sum) - (walletinfo.mempool_stats.funded_txo_sum - walletinfo.mempool_stats.spent_txo_sum)
      const currencyValues = await fetch("https://blockchain.info/ticker")
      const currencyValuesJSON = await currencyValues.json()
      const currencyValue = currencyValuesJSON.USD.last
      const walletBTCBalance = await fetch(`https://blockchain.info/tobtc?currency=USD&value=${currencyValue}`)
      const BTCBalance = await walletBTCBalance.json()
      setUSDBalance(currencyValue)
      setBTCBalance(BTCBalance)
      setSATBalance(getwalletBalance)
  }
  GetWalletValues("1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2")
    //WalletBalance("1BvBMSEYstWetqTFn5Au4m4GFg7xJaNVN2")
  },[])
    return(
        <>
        <View style={styles.container}>
            <Text style={styles.text}>Mi Cuenta</Text>
            {
              USDBalance != null && BTCBalance != null && SATBalance != null ? <Text> Dólares: {USDBalance} Bitcoin: {BTCBalance}</Text>:<Text> cargando...</Text>
            }
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