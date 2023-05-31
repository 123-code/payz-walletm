import React,{useState,useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet,Pressable } from 'react-native';
import { ListItem,Avatar,Button } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GetInsertedData} from '../../util/SQLiteconn';
import {GetWalletBTCBalance} from '../../util/GetWalletBTCBalance';
import WalletBalance from '../../Components/WalletBalance';
import { ethers } from 'ethers';


export default function ViewAccount() {
  const[USDBalance,setUSDBalance] = useState(0)
  const[BTCBalance,setBTCBalance] = useState(0)
  const[SATBalance,setSATBalance] = useState(0)
  const [Account,SetAccount] = useState([]);
  const [ETHAccount,setETHAccount] = useState("");
  const [PublicKey,setPublicKey] = useState(null);
  const [PrivateKey,setPrivateKey] = useState("");
  const navigation = useNavigation();

  const BTCImageURL = "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/300px-Bitcoin.svg.png"
  const USDImageURL = "https://img.freepik.com/premium-vector/dollar-icon-american-currency-symbol-banknote_572070-170.jpg?w=1060"

const GOERLIRPC = "https://goerli.infura.io/v3/c24c8ebb1b7c447aa3e95e28e11e6532"


  const retrieveData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value !== null) {
        console.log('Data retrieved successfully:', value);
        setETHAccount(value)
      } else {
        console.log('Data not found');
      }
    } catch (error) {
      console.error('Error retrieving data:', error);
    }
  };


  const GetMyAccount = async()=>{
    try{
      const provider = new ethers.providers.JsonRpcProvider(GOERLIRPC);
      const wallet = new ethers.Wallet(ETHAccount);
      const address = wallet.address;
      console.log("Provider",address)
    }catch(err){console.error(err)
      console.log("ProviderError")}
  }



const GetAccountBalance = async()=>{
  try{
    const provider = new ethers.providers.JsonRpcProvider(GOERLIRPC);
    const wallet = new ethers.Wallet(ETHAccount);
    const address = wallet.address;
    const balance = await provider.getBalance('0x390be0D2Da9eDC0F85Ff09bfBFC874Bc8Ab665A6');
    console.log("Balance",ethers.utils.formatEther(balance))
  }catch(err){console.error(err)
    console.log("BalanceError")}
}


const AccountGetter = async()=>{
  const account =  await GetInsertedData();
  /* --TODO in the case of specific selection
  create sqlite query that triggers public key by ID
  */
  const MYAccount = account[0]
  SetAccount(MYAccount)
  console.log("dwidiwrf",Account)
}

useEffect(() => {
  retrieveData("PrivateKey");
  GetMyAccount();
  GetAccountBalance();
})

  useEffect(()=>{


    AccountGetter()
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
  GetWalletValues(Account)
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

<Text style={styles.text}> Transfiere a tus amigos </Text>
<Button
  title="->"
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
  onPress={() => navigation.navigate("PinAuth")}
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
    },
    
  });