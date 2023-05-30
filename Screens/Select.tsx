import React,{useState,useEffect} from "react";
import { View,StyleSheet } from 'react-native';
import { generateMnemonic, generateWallet } from '@coingrig/wallet-generator';
import { Text } from "@react-native-material/core";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Layout,Spinner } from '@ui-kitten/components';
import PayzButton from ".././Components/PayzButton";
import { useNavigation } from '@react-navigation/native';
export default function Select() {

      const [PublicKey, setPublicKey] = useState("");
      const [Address, setAddress] = useState("");
      const [isLoading, setIsLoading] = useState(true);
      const navigation = useNavigation();


useEffect(()=>{
     generateETHWallet();

},[])
 

useEffect(() => {
  const timer = setTimeout(() => {
    setIsLoading(false);
  }, 5000);
  return () => clearTimeout(timer);
}, []);


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
            <Text style={styles.text}>Tu cuenta es: {Address}</Text>
            <Text> </Text>

            <PayzButton onPress={()=>{navigation.navigate("ViewAccount")}} label="continuar"/>
          </View>
        );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#EEDED6'
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
    fontSize: 20,
    color: 'black',
    fontFamily:'Futura',
    justifyContent: 'center',
    alignItems: 'center',
  }
});
