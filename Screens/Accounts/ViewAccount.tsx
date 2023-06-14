import React,{useState,useEffect} from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet,Pressable } from 'react-native';
import { PricingCard} from '@rneui/themed';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PayzButton from '../../Components/PayzButton';
import { lightColors, Card, Button } from '@rneui/themed';
import { ethers } from 'ethers';
import { ERC20ABI } from '../../ABIs/ERC20'
//import CryptoJS from 'crypto-js'

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


return (
  <>
    <View style={styles.container}>
      <Text style={styles.text}>Mi cuenta:</Text>

      <View style={styles.horizontalContainer}>
        <View style={styles.balanceItem}>
          <Text style={styles.balanceLabel}>ETH Balance:</Text>
          <Text style={styles.balanceValue}>{ETHBalance.toFixed(3)}</Text>
        </View>

        <View style={styles.balanceItem}>
          <Text style={styles.balanceLabel}>PTK Balance:</Text>
          <Text style={styles.balanceValue}>{ETHBalance.toFixed(3)}</Text>
        </View>
      </View>

      <View style={styles.horizontalContainer}>
        <Pressable style={[styles.button, styles.smallButton]}>
          <Text style={[styles.buttonText, styles.smallButtonText]}>Transferir</Text>
        </Pressable>

        <Pressable style={[styles.button, styles.smallButton]}>
          <Text style={[styles.buttonText, styles.smallButtonText]}>Añadir más +</Text>
        </Pressable>


        
        
      </View>

     <View style={styles.verticalContainer} >
  
      <Pressable style={styles.Bigbutton}>
        <Text style={styles.buttonText}> Compra Crypto. </Text>
      </Pressable>

     </View>

  <View style={styles.verticalContainer} >
  <Pressable style={styles.Bigbutton}>
  <Text style={styles.buttonText}> Compra Crypto </Text>
  </Pressable>
 </View>
    </View>
  </>
);
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#212121',
  },
  text: {
    fontSize: 24,
    color: 'white',
    fontWeight: '700',
    fontFamily: 'Futura',
    marginBottom: 20,
    textAlign: 'center',
  },
  horizontalContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 10,
    width: '100%',
  },
  verticalContainer: {
    flexDirection: 'column'
   
  },
  balanceItem: {
    alignItems: 'center',
    marginBottom: 10,
  },
  balanceLabel: {
    fontFamily: 'Futura',
    color: 'gray',
    fontSize: 16,
    marginBottom: 5,
  },
  balanceValue: {
    fontFamily: 'Futura',
    color: 'white',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#39FF14',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 8, // Adjust the value as desired
    elevation: 2,
    marginBottom: 0, // Remove the marginBottom
    flex: 0.4, // Adjust the value as desired
    marginHorizontal: 5,
    
  },

  Bigbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'center',
    backgroundColor: '#80808080',
    borderRadius: 8,
    paddingVertical:1,
    paddingHorizontal: 8,
    elevation: 1,
    marginBottom: 0,
    marginTop: 20,
    flex: 0.3,
    width: '100%', // Stretch the button to full width
    marginHorizontal: 5,
  
  },
  

  smallButton: {
    paddingVertical: 8,
  },
 buttonText: {
  fontSize: 16,
  fontWeight: '600',
  color: 'white', 
  fontFamily: 'Futura',
  letterSpacing: 1.5,
  textAlign: 'center',
 

},
  smallButtonText: {
    fontSize: 14,
    color: 'black',
    fontFamily: 'Futura',
  },
});
