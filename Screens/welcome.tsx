import React from 'react';
import { View, StyleSheet, Pressable, Image, TouchableOpacity,ImageBackground } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Text } from "@react-native-material/core";
import "@ethersproject/shims"

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
     { /* <ImageBackground
        source={{ uri:'https://static.vecteezy.com/system/resources/previews/004/654/429/original/abstract-halftone-dotted-background-futuristic-grunge-pattern-dot-wave-modern-optical-pop-art-texture-for-posters-sites-business-cards-cover-labels-mock-up-vintage-layout-free-vector.jpg'}}
        style={styles.overlay}
        resizeMode="repeat" 
      > */}
      <Text variant="h1" style={styles.title}>PAYZ</Text>
      <Text style={styles.subtitle}>Ingresa a tu cuenta</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => {navigation.navigate("PhoneNumberInput")}}>
          <Image
            style={styles.buttonLogo}
            source={{
              uri: 'https://discussions.apple.com/content/attachment/980278040',
            }}
          />
          <Text style={styles.buttonText}> SMS</Text>
        </TouchableOpacity>
        <Text></Text>
        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Image
            style={styles.buttonLogo}
            source={{
              uri: 'https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/image8-2.jpg?width=1190&height=800&name=image8-2.jpg',
            }}
          />
          <Text style={styles.buttonText}>Google</Text>
        </TouchableOpacity>
<Text></Text>

        <TouchableOpacity style={styles.button} onPress={() => {}}>
          <Image
            style={styles.buttonLogo}
            source={{
              uri: 'https://seeklogo.com/images/T/twitter-icon-square-logo-108D17D373-seeklogo.com.png',
            }}
          />
          <Text style={styles.buttonText}>Twitter</Text>
        </TouchableOpacity>


      </View>
     {/* </ImageBackground>*/} 
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 40,
    backgroundColor: '#212121', 
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#39FF14',
    fontFamily: 'System',
    marginBottom: 130,
    textAlign: 'center',
    borderRadius: 10,
    paddingHorizontal: 20,
    paddingVertical: 10,
    textTransform: 'uppercase',
    letterSpacing: 2,
    elevation: 3,
  },
  
  subtitle: {
    fontSize: 24,
    color: 'white',
    fontWeight: '400',
    fontFamily: 'Futura',
    marginBottom: 70,
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#39FF14',
    borderRadius: 38,
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 3,
    marginBottom: 10,
    width: '100%',
  },
  buttonLogo: {
    width: 24,
    height: 24,
    marginRight: 3,
    marginLeft: 1,
    borderRadius: 38,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
    fontFamily: 'Futura',
    letterSpacing: 1.2,
    flex: 1,
    textAlign: 'center',
  },
  twitterbutton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1DA1F2',
    borderRadius: 38,
    paddingVertical: 10,
    paddingHorizontal: 15,
    elevation: 2,
    marginBottom: 10,
    width: '100%',
  },
  twittertext: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ffffff',
    fontFamily: 'Futura',
  },
  overlay: {
    flex: 1,
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});
//https://static.vecteezy.com/system/resources/previews/004/654/429/original/abstract-halftone-dotted-background-futuristic-grunge-pattern-dot-wave-modern-optical-pop-art-texture-for-posters-sites-business-cards-cover-labels-mock-up-vintage-layout-free-vector.jpg