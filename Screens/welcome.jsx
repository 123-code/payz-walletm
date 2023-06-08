import React from 'react';
import { View, StyleSheet, Pressable, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text } from "@react-native-material/core";
import "@ethersproject/shims"

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text variant="h1" style={styles.title}>Bienvenido a Payz</Text>
      <Text style={styles.subtitle}>Verifica tu número celular para ingresar</Text>

      <View style={styles.buttonContainer}>
      

      <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Image
            style={styles.buttonLogo}
            source={{
              uri: 'https://discussions.apple.com/content/attachment/980278040',
            }}
          />
          <Text style={styles.buttonText}>Ingresar con SMS</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Image
            style={styles.buttonLogo}
            source={{
              uri: 'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=1190&height=800&name=image8-2.jpg',
            }}
          />
          <Text style={styles.buttonText}>Ingresar con Google</Text>
        </TouchableOpacity>


        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Image
            style={styles.buttonLogo}
            source={{
              uri: 'https://seeklogo.com/images/T/twitter-icon-square-logo-108D17D373-seeklogo.com.png',
            }}
          />
          <Text style={styles.buttonText}>Ingresar con Twitter</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40, // Adjust the horizontal padding
    backgroundColor: '#EEDED6',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'green',
    fontFamily: 'Futura',
    marginBottom: 130,
    textAlign: 'center', // Center the text horizontally
  },
  subtitle: {
    fontSize: 24,
    color: 'black',
    fontFamily: 'Futura',
    marginBottom: 70,
    textAlign: 'center', // Center the text horizontally
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20, // Add some space at the top
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000000',
    borderRadius: 8,
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 2,
    marginBottom: 10,
    width: '80%', // Adjust the width of the buttons
  },
  buttonLogo: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Futura',
  },

});
