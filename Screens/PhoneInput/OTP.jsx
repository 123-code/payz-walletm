import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Button, Text } from "react-native";

import { checkVerification } from '../../api/Verify';
import OTPInputView from "@twotalltotems/react-native-otp-input";

const Otp = ({ route, navigation }) => {
 const { phoneNumber } = route.params;
 const [invalidCode, setInvalidCode] = useState(false);
 return (
   <SafeAreaView style={styles.wrapper}>
     <Text style={styles.prompt}>Ingresa el código que te enviamos</Text>
     <Text style={styles.message}>
       {`Tu número (${phoneNumber}) será usado para proteger tu cuenta cada vez que ingreses.`}
     </Text>
     <Button
       title="Editar número"
       onPress={() => navigation.replace("PhoneNumber")}
     />
     <OTPInputView
       style={{ width: "80%", height: 200 }}
       pinCount={6}
       autoFocusOnLoad
       codeInputFieldStyle={styles.underlineStyleBase}
       codeInputHighlightStyle={styles.underlineStyleHighLighted}
       onCodeFilled={(code) => {
         checkVerification(phoneNumber, code).then((success) => {
           if (!success) setInvalidCode(true);
           success && navigation.replace("CreatePIN");
         });
       }}
     />
     {invalidCode && <Text style={styles.error}>Incorrect code.</Text>}
   </SafeAreaView>
 );
};

const styles = StyleSheet.create({
 wrapper: {
   flex: 1,
   justifyContent: "center",
   alignItems: "center",
 },

 borderStyleBase: {
   width: 30,
   height: 45,
 },

 borderStyleHighLighted: {
   borderColor: "#03DAC6",
 },

 underlineStyleBase: {
   width: 30,
   height: 45,
   borderWidth: 0,
   borderBottomWidth: 1,
   color: "black",
   fontSize: 20,
 },

 underlineStyleHighLighted: {
   borderColor: "#03DAC6",
 },

 prompt: {
   fontSize: 24,
   paddingHorizontal: 30,
   paddingBottom: 20,
 },

 message: {
   fontSize: 16,
   paddingHorizontal: 30,
 },

 error: {
   color: "red",
 },
});

export default Otp;