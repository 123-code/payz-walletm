import React,{useState,useEffect} from 'react';
import { View, Text, StyleSheet,Pressable } from 'react-native';
import { Input } from 'native-base';
import { useNavigation } from '@react-navigation/native';
import { GenerateWallet,EncryptValues } from '../util/JavascriptKeyGen';
import PayzButton from '../Components/PayzButton';
import { Base64 } from 'js-base64';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function CreatePIN() {
  const navigation = useNavigation();
  const [numbers, setNumbers] = useState({
    Number1: 0,
    Number2: 0,
    Number3: 0,
    Number4: 0,
  });



const HandleInputChange = (ename,evalue)=>{
  setNumbers({
    ...numbers,
    [ename]:evalue
  })
}


const GenerateBitcoinKeys = ()=>{
  try{
    const key = GenerateWallet();
    return key;
  }catch(err){
    console.error(err);
  }
}

const SaveData = async(value)=>{
  try{
    await AsyncStorage.setItem('pinhash',value)
  }catch(err){
    console.error(err)
  }
}



const HandleSubmit = async () => {
  navigation.navigate('CreatingAccount')
   const data = Object.values(numbers).join('');
   console.log(data)
   const Data = Base64.encode(data);
    console.log(Data)
   SaveData(Data);

};

  return (
    <>
      <View style={styles.container}>
      <Text style={styles.title}>Crea un PIN</Text>
      <Text style={styles.message}>
       {`Tu pin proveerá seguridad adicional para que accedas a tu cuenta`}
     </Text>
      </View>

      <View style={styles.inputContainer}>
        <Input mx={1}  w="20%"  style={styles.input} onChangeText={(text)=>HandleInputChange('Number1',text)} />
        <Input mx={1}  w="20%"  style={styles.input} onChangeText={(text)=>HandleInputChange('Number2',text)} />
        <Input mx={1}  w="20%"  style={styles.input} onChangeText={(text)=>HandleInputChange('Number3',text)} />
        <Input mx={1}  w="20%" style={styles.input} onChangeText={(text)=>HandleInputChange('Number4',text)} />
      </View>
      <PayzButton label="Listo" onPress={HandleSubmit}/>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 50,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: 60,
    textAlign: 'center',
    fontSize: 30,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Futura',
  },
  message: {
    fontSize: 16,
    paddingHorizontal: 30,
  }, button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});