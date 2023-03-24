import React from 'react';
import Welcome from '../Screens/welcome';
import PhoneNumberInput from '../Screens/PhoneInput/PhoneInput';
import CreatePIN from '../Screens/CreatePIN';
import Otp from '../Screens/PhoneInput/OTP';
import Gated from '../Screens/PhoneInput/Gated';
import {createNativeStackNavigator} from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();
export default function AppStack(){
    return (
      <Stack.Navigator>
   <Stack.Screen name="CreatePIN" component={CreatePIN}/>
<Stack.Screen name="Welcome" component={Welcome}/>
<Stack.Screen name="PhoneNumberInput" component={PhoneNumberInput}/>
<Stack.Screen name="Otp" component={Otp}/>
<Stack.Screen name="Gated" component={Gated}/>
      </Stack.Navigator>
    )
}
