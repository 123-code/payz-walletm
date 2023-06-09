import React,{useState,useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet,Pressable } from 'react-native';
import { PricingCard} from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PayzButton from '../../Components/PayzButton';
import { lightColors, Card, Button } from '@rneui/themed';
import { ethers } from 'ethers';
import { ERC20ABI } from '../../ABIs/ERC20'
import CryptoJS from 'crypto-js'

export default function ViewAccount() {
  const [ETHBalance, setETHBalance] = useState<number>(0);
  const [Account,SetAccount] = useState([]);
  const [ETHAccount,setETHAccount] = useState("");
  const [PublicKey,setPublicKey] = useState(null);
  const [PrivateKey,setPrivateKey] = useState("");
  const[PayzBalance,setPayzBalance] = useState("");
  const navigation = useNavigation();

//const contract = new ethers.Contract(contractAddress, contractABI, provider);
const GOERLIRPC = "https://polygon-mumbai.infura.io/v3/c24c8ebb1b7c447aa3e95e28e11e6532"
const provider = new ethers.providers.JsonRpcProvider(GOERLIRPC);

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

  /*
  TODO move function away from here..
  */ 
  const DecodePrivateKey = (pk:string)=>{
    let bytes = CryptoJS.AES.decrypt(pk,'.');
    let plaintext = bytes.toString(CryptoJS.enc.Utf8);
    return plaintext;
  }
 

  const GetMyAccount = async()=>{
    try{
      const wallet = new ethers.Wallet(ETHAccount);
      const address = wallet.address;
      console.log("Provider",address)
    }catch(err){console.error(err)
      console.log("ProviderError")}
  }

  const ERC20ContractInstance = async () => {
    try {
      const wallet = new ethers.Wallet(ETHAccount,provider);
      const address = wallet.address;
      const contractAddress = '0x4115fCDA6dF06eabF4F8d91f12Eeb209289447cC';
      const contract = new ethers.Contract(contractAddress, ERC20ABI, wallet);
      const balance = await contract.GetPayzBalance(address);
      const formattedBalance = ethers.utils.formatUnits(balance);
      const mint = await contract.Mint(address, { gasLimit: 200000 });
      await mint.wait();
      setPayzBalance(formattedBalance);
  
      console.log("ADDRESS BALANCE", formattedBalance);
    } catch (err) {
      console.error(err);
    }
  };


  const GetAccountBalance = async (): Promise<void> => {
    try {
      const provider = new ethers.providers.JsonRpcProvider(GOERLIRPC);
      const wallet = new ethers.Wallet(ETHAccount);
      const address = wallet.address;
      const balance = await provider.getBalance(address);
      console.log("Balance", ethers.utils.formatEther(balance))
      setETHBalance(parseFloat(ethers.utils.formatEther(balance)))
    } catch (err) {
      console.error(err)
      console.log("BalanceError")
    }
  }
  

useEffect(() => {
  retrieveData("PrivateKey");
  GetMyAccount();
  GetAccountBalance();
  ERC20ContractInstance();
})


    return(
    <>
    <View style={styles.container}>
      <Text style={styles.text}> Mi cuenta: </Text>
    
      <Card style={styles.card}>
        <Card.Title style={styles.title}>BILLETERA</Card.Title>
        <Card.Divider />
        <View style={styles.balanceContainer}>
  <View style={[styles.balanceItem, styles.balanceItemWithSpace]}>
    <Text style={styles.balanceLabel}>Payz Balance</Text>
    <Text style={styles.balanceValue}>0</Text>
  </View>
  <View style={styles.balanceItem}>
    <Text style={styles.balanceLabel}>ETH Balance</Text>
    <Text style={styles.balanceValue}>{ETHBalance.toFixed(3)}</Text>
  </View>

</View>
        <Pressable style={styles.tpbutton}>
         <Text style={styles.buttonText}> AÑADIR MÁS + </Text> 
        </Pressable>
      </Card>
    
    <Text> r </Text>
<Pressable style={styles.button}>
 <Text style={styles.buttonText}> TRANSFERIR ERC-20 </Text> 
</Pressable>
        </View>
        </>
    )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#212121', 
  },
  title: {
    fontFamily: 'Futura',
    color: 'gray', 
    fontSize: 24,
    marginBottom: 20,
  },
  card: {
    width: '80%',
    backgroundColor: '#212121', 
    borderRadius: 8,
    padding: 20,
  },
  balanceItemWithSpace: {
    marginBottom: 10,
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: '600',
    fontFamily: 'Futura',
    marginBottom: 70,
    textAlign: 'center',
  },
  balanceLabel: {
    fontFamily: 'Futura',
    color: 'gray', 
    fontSize: 16,
    marginBottom: 5,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#39FF14',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 2,
    marginBottom: 10,
    width: '80%',
  },
  tpbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#39FF14',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 2,
    marginBottom: 10,
    width: '90%',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Futura',
    letterSpacing: 1.5,
  },
  balanceItem: {
    fontFamily: 'Futura',
    flexDirection: 'column',
    alignItems: 'flex-start', 
    marginBottom: 10,
  },
  balanceValue: {
    fontFamily: 'Futura',
    color: 'gray', 
    fontSize: 24,
  },
   balanceContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  topUpButton: {
    backgroundColor: '#39FF14', 
    borderRadius: 8,
  },
});