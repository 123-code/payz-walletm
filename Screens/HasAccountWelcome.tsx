  import React,{useState,useEffect} from 'react';
  import { Base64 } from 'js-base64';
  import { View, Text, StyleSheet,Pressable } from 'react-native';
  import { Input } from 'native-base';
  import { useNavigation } from '@react-navigation/native';
  import PayzButton from '../Components/PayzButton';
  import AsyncStorage from '@react-native-async-storage/async-storage';


  export default function HasAccountWelcome() {
    const navigation = useNavigation();
    const[data,setdata] = useState("");
    const [numbers, setNumbers] = useState({
      Number1: 0,
      Number2: 0,
      Number3: 0,
      Number4: 0,
    });

  const HandleInputChange = (ename: string,evalue: string)=>{
    setNumbers({
      ...numbers,
      [ename]:evalue
    })
  }

  const GetData = async()=>{
    try{
      const value = await AsyncStorage.getItem('pinhash');
      if(value !== null){
        console.log("PIN",value);
        setdata(value);
        console.log("decoded:",Base64.decode(value))
      }
    }catch(err){
    }
  }

  useEffect(()=>{
    const fetchData = async()=>{
    await GetData();
    }
    fetchData();
  },[])

  const Authenticate = async () => {
    const Inputpin = Object.values(numbers).join('');
  const PINHash = Base64.encode(Inputpin);
  console.log("PINI",PINHash)
    if (data === PINHash) {
      navigation.navigate('WelcomeBack');
    } else {
      alert('PIN Incorrecto');
      console.log('Not Authenticated');
    }
  };


  const HandleSubmit = async () => {

    try{
    //encryptPassword(numbers);
    Authenticate();

  
    }catch(err){
      console.error(err);
    }
  };

    return (
      <>
        <View style={styles.container}>
        <Text style={styles.title}>Ingresa tu PIN</Text>
        <Text style={styles.message}>
        {`Ingresa tu PIN para acceder a tu cuenta`}
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
      marginVertical: 40,
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