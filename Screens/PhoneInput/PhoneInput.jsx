import React,{useState,useRef} from 'react';
import {sendSmsVerification} from '../../api/Verify';
import { useNavigation } from '@react-navigation/native';
import {
    SafeAreaView,
    StyleSheet,
    View,
    TouchableOpacity,
    Text,
   } from "react-native";
   import PhoneInput from "react-native-phone-number-input";

   const PhoneNumberInput = ()=>{
    const navigation = useNavigation();
    const [value, setValue] = useState();
    const [formattedValue, setFormattedValue] = useState();
    const phoneInput = useRef(null);

    return(
        <>
       <View style={styles.container}>
       <SafeAreaView style={styles.wrapper}>
         <View style={styles.welcome}>
           <Text style={styles.text}>Número Celular </Text>
         </View>
         <PhoneInput
           ref={phoneInput}
           defaultValue={value}
           defaultCode="EC"
           layout="first"
           onChangeText={(text) => {
             setValue(text);
           }}
           onChangeFormattedText={(text) => {
             setFormattedValue(text);
           }}
           countryPickerProps={{ withAlphaFilter: true }}
           withShadow
           autoFocus
         />
         <TouchableOpacity
           style={styles.button}
           onPress={() => {
            sendSmsVerification(formattedValue).then((sent)=>{
               navigation.navigate("Otp",{ phoneNumber: formattedValue });
            })
             // TODO - send SMS!
           }}
         >
           <Text style={styles.buttonText}>Registrarse</Text>
         </TouchableOpacity>
       </SafeAreaView>
     </View>
   </>
 );
};

const styles = StyleSheet.create({
 container: {
   flex: 1,
   backgroundColor: '#212121',
 },

 wrapper: {
   flex: 1,
   justifyContent: "center",
   alignItems: "center",
 },

 button: {
   marginTop: 20,
   height: 50,
   width: 300,
   justifyContent: "center",
   alignItems: "center",
   backgroundColor: '#39FF14',
   shadowColor: "rgba(0,0,0,0.4)",
   shadowOffset: {
     width: 1,
     height: 5,
   },
   shadowOpacity: 0.34,
   shadowRadius: 6.27,
   elevation: 10,
   borderRadius: 30,
 },

 buttonText: {
   color: "black",
   fontSize: 14,
    fontWeight: "bold",
    fontFamily: "Futura",
 },
 text:{
  fontSize: 24,
    color: 'white',
    fontWeight: '400',
    fontFamily: 'Futura',
    marginBottom: 40,
    textAlign: 'center',
 },

 welcome: {
   padding: 20,
 },

 status: {
   padding: 20,
   marginBottom: 20,
   justifyContent: "center",
   alignItems: "flex-start",
   color: "gray",
 },
});

export default PhoneNumberInput;
 