import React from 'react';
import Welcome from '../Screens/welcome';
import PhoneNumberInput from '../Screens/PhoneInput/PhoneInput';
import CreatePIN from '../Screens/CreatePIN';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
export default function AppStack(){
    return (
      <Stack.Navigator>
<Stack.Screen name="Welcome" component={Welcome}/>
<Stack.Screen name="PhoneNumberInput" component={PhoneNumberInput}/>
<Stack.Screen name="CreatePIN" component={CreatePIN}/>
      </Stack.Navigator>
    )
}
