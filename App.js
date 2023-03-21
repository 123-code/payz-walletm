import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NativeBaseProvider, Text, Box } from "native-base";
import Welcome from './Screens/welcome.jsx';
import CreatePIN from './Screens/CreatePIN.jsx';

export default function App() {
  return (
    <NativeBaseProvider>


      <CreatePIN  />

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
 