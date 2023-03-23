import React from "react";
import { SafeAreaView, StyleSheet, Button, View, Text,Pressable } from "react-native";

const Gated = ({ navigation }) => {
 return (
   <SafeAreaView style={styles.wrapper}>
     <View>
       <Text>Registrado con exito!</Text>
     </View>
 
     <Button
       title="Start over"
       onPress={() => navigation.replace("PhoneNumber")}
     />
   </SafeAreaView>
 );
};

const styles = StyleSheet.create({
 wrapper: {
   flex: 1,
   justifyContent: "center",
   alignItems: "center",
 },
});

export default Gated;