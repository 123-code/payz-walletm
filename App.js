import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider,Box } from "native-base";
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import AppStack from './Components/StackNavigator.jsx';


export default function App() {
  return (
    <SafeAreaProvider>
    <NativeBaseProvider>
      <NavigationContainer>
      <AppStack />
      </NavigationContainer>
      <StatusBar style="auto" />
    </NativeBaseProvider>
    </SafeAreaProvider>
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
 