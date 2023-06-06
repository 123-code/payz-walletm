import React,{useState,useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet,Pressable } from 'react-native';
import { PricingCard, lightColors } from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {GetInsertedData} from '../../util/SQLiteconn';
import {GetWalletBTCBalance} from '../../util/GetWalletBTCBalance';
import WalletBalance from '../../Components/WalletBalance';
import PayzButton from '../../Components/PayzButton';
import { ethers } from 'ethers';
import { ERC20ABI } from '../../ABIs/ERC20'


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
      <Text style={styles.text}> Mi Cuenta: </Text>
    <PricingCard
        color={lightColors.primary}
        title="Balance"
        price={PayzBalance}
        info={[`$ Balance: 0,ETH Balance:${ETHBalance.toFixed(3)}`]}
        button={{ title: ' Añadir más', icon: 'add-circle' }}
      />
    
<PayzButton label="transferir"/>
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