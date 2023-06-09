import React,{useState,useEffect} from "react";
import { View,StyleSheet,TouchableOpacity,Image,Clipboard,Pressable } from 'react-native';
import { generateMnemonic, generateWallet } from '@coingrig/wallet-generator';
import { Text } from "@react-native-material/core";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Layout,Spinner } from '@ui-kitten/components';
import PayzButton from ".././Components/PayzButton";
import { useNavigation } from '@react-navigation/native';
import { lightColors, Card, Button } from '@rneui/themed';
import { ToastContainer } from 'react-native-toast-message';
import Toast from 'react-native-toast-message';
import CryptoJS from 'crypto-js'
import { RandomBytes } from 'react-native-crypto';


export default function Select() {

      const [PublicKey, setPublicKey] = useState("");
      const [Address, setAddress] = useState("");
      const [isLoading, setIsLoading] = useState(true);
      const navigation = useNavigation();


 // Move away  functionfrom here 
 // key should be pin 
 const EncodePrivateKey = (pk:string) => {
  const randomBytes = RandomBytes(16);
  const cyphertext = CryptoJS.AES.encrypt(pk, randomBytes).toString();
  console.log("Cypher", cyphertext);
  return cyphertext;
};

/////

      
useEffect(()=>{
     generateETHWallet();

},[])
 

useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 5000);
  return () => clearTimeout(timer);
}, []);



  const copyToClipboard = (text: string) => {
    Clipboard.setString(text);
    Toast.show({
      type: 'success',
      text1: 'Copiado al portapapeles',
      position: 'bottom',
      visibilityTime: 2000,
      autoHide: true,
    });
  };


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
            EncodePrivateKey(pwallet.privateKey);
            return pwallet.privateKey;
        };

        if (isLoading) {
          return (
            <View>
              <Layout>
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
        <Pressable  onPress={() => copyToClipboard('Text to be copied')}> 
        <Toast ref={(ref: ToastRef | null) => Toast.setRef(ref)} />
          <Text> Copiar</Text>
        </Pressable>
             </Card>
            
            <Text> </Text>



            <PayzButton onPress={()=>{navigation.navigate("ViewAccount")}} label="continuar"/>
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
    marginBottom: 10,
    width: '80%',
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
