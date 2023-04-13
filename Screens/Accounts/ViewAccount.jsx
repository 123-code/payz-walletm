import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet,Pressable } from 'react-native';
import { ListItem,Avatar,Button } from '@rneui/themed';
import {GetWalletBTCBalance} from '../../util/GetWalletBTCBalance';
import WalletBalance from '../../Components/WalletBalance';



export default function ViewAccount() {
  const[USDBalance,setUSDBalance] = useState(null)
  const[BTCBalance,setBTCBalance] = useState(null)
  const[SATBalance,setSATBalance] = useState(null)

  const BTCImageURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/300px-Bitcoin.svg.png"
  const USDImageURL = "https://img.freepik.com/premium-vector/dollar-icon-american-currency-symbol-banknote_572070-170.jpg?w=1060"

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
    <Text style={styles.text}>Mi Cuenta ⚡</Text>
    {USDBalance === null ?<ListItem bottomDivider>
      <ListItem.Title>Cargando...</ListItem.Title>
    </ListItem>: <Text>  </Text>}
    <ListItem bottomDivider>
    <Avatar
    rounded
   source={{ uri: BTCImageURL  }}
  />
  <ListItem.Content>
  <ListItem.Title>Bitcoin</ListItem.Title>
  <ListItem.Subtitle>{BTCBalance}</ListItem.Subtitle>
  </ListItem.Content>
  </ListItem>
  <ListItem>
  <Avatar rounded title="A" containerStyle={{ backgroundColor: 'grey' }}  source={{ uri: USDImageURL  }} />
  <ListItem.Content>
  <ListItem.Title>Dólares</ListItem.Title>
  <ListItem.Subtitle>{USDBalance}</ListItem.Subtitle>
  </ListItem.Content>
  </ListItem>

  <Text style={styles.text}> Agrega dinero a tu cuenta! </Text>
  
  <Button
              title="+"
              buttonStyle={{
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'black',
                borderWidth: 2,
                borderColor: 'white',
                borderRadius: 30,
              }}
              containerStyle={{
                width: 100,
                marginHorizontal: 120,
                marginVertical: 10,
              }}
              titleStyle={{ fontWeight: 'bold' }}
            />


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
      textAlign: 'center',
    }
  });