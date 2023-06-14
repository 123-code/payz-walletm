import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { NativeBaseProvider,Box } from "native-base";
import { IconComponentProvider, Icon } from "@react-native-material/core";
import { NavigationContainer } from '@react-navigation/native';
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { SafeAreaProvider } from 'react-native-safe-area-context';
import * as eva from '@eva-design/eva';
import { ApplicationProvider, Layout, Text } from '@ui-kitten/components';
import AppStack from './Components/StackNavigator.tsx';


export default function App() {
  return (
    <IconComponentProvider IconComponent={MaterialCommunityIcons}> 
    <ApplicationProvider {...eva} theme={eva.light}>
    <SafeAreaProvider>
    <NativeBaseProvider>
      <NavigationContainer>
      <AppStack />
      </NavigationContainer>
      <StatusBar style="auto" />
    </NativeBaseProvider>
    </SafeAreaProvider>
    </ApplicationProvider>
    </IconComponentProvider>
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
 