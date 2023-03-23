import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider,Box } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import AppStack from './Components/StackNavigator.jsx';


export default function App() {
  return (
    <NativeBaseProvider>
      <NavigationContainer>
      <AppStack />
      </NavigationContainer>
      <StatusBar style="auto" />
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
 