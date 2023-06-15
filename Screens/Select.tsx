import React,{useState,useEffect} from "react";
import { View,StyleSheet,TouchableOpacity,Image,Clipboard,Pressable } from 'react-native';
import { generateMnemonic, generateWallet } from '@coingrig/wallet-generator';
import { Text } from "@react-native-material/core";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Layout,Spinner } from '@ui-kitten/components';
import PayzButton from ".././Components/PayzButton";
import { useNavigation } from '@react-navigation/native';
import { lightColors, Card, Button } from '@rneui/themed';
import { Encrypt } from "../Components/Encrypt";
import 'react-native-get-random-values';
var bcrypt = require('bcryptjs');
var salt = bcrypt.genSaltSync(10);


export default function Select() {

      const [PublicKey, setPublicKey] = useState("");
      const [Address, setAddress] = useState("");
      const [isLoading, setIsLoading] = useState(true);
      const [key, setKey] = useState('');
      const [privateKey, setPrivateKey] = useState('');
      const navigation = useNavigation();


const retrieveData = async () => {
  try {
    const value = await AsyncStorage.getItem('pinhash');
    if (value !== null) {
      console.log('Data retrieved successfully:', value);
      setKey(value);
    } else {
      console.log('Data not found');
    }
  } catch (error) {
    console.error('Error retrieving data:', error);
  }
};


const SaveData = async(value:any)=>{
  try{
    var hash = bcrypt.hashSync(value, salt);
    console.log("HASH",hash)
    await AsyncStorage.setItem('pkhash',hash)
    // TODO DELETE THIS LINE, UNSAFE CODE 
    await AsyncStorage.setItem('privatekey',value)
    ////////
  }catch(err){
    console.error(err)
  }
}

      
useEffect(()=>{
  const generatewallet = async()=>{
    await generateETHWallet();
  }
  generatewallet();

},[])
 

useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 5000);
  return () => clearTimeout(timer);
}, []);




        const generateETHWallet = async (): Promise<void> => {
          try{
            const words = 12; 
            const mnemonic = await generateMnemonic(words);
            const chain = 'ETH';
            let wallet = await generateWallet(mnemonic, chain);
            let  pwallet = JSON.parse(wallet);
            setAddress(pwallet.address); 
            setPrivateKey(pwallet.privateKey);
           console.log( "KEY",pwallet.privateKey)
           const pin = await retrieveData();
    
           SaveData(pwallet.privateKey)
            return pwallet.privateKey;

          }catch(err){console.error(err)}
           
        };

        if (isLoading) {
          return (
            <View>
              <Layout style={styles.container}>
              <Spinner size='giant' />
              </Layout>
              <Text style={styles.text}>Creating...</Text>
            </View>
          );
        }
      
        return (
          <View style={styles.container}> 
             <Text style={styles.text}>Listo, tu cuenta ya fue creada! </Text>
 
              <Text style={styles.text}>Tu dirección es: </Text>
             <Card>
        <Card.Title style={styles.title}>{Address}</Card.Title>
             </Card>
            
            <Text> </Text>



            <Pressable style={styles.button} onPress={()=>{navigation.navigate('ViewAccount')}}>
              <Text style={styles.buttonText}> Continuar </Text>
              </Pressable>

          </View>
        );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#212121'
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'gray',
    fontFamily: 'Futura',
    marginBottom: 10,
    textAlign: 'center',
  },
  header:{
    backgroundColor: '#EEDED6'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
  },
  text:{
    fontSize: 24,
    color: 'white',
    fontWeight: '600',
    fontFamily: 'Futura',
    marginBottom: 30,
    textAlign: 'center',
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
    marginBottom: 1,
    width: '80%',
    marginLeft: 50,
  },
  buttonLogo: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Futura',
    letterSpacing: 1.5,
  },
});
