import React, { useState,useEffect } from 'react';
import {CheckInsertedData} from '../util/SQLiteconn.js';
import Welcome from '../Screens/welcome';
import PhoneNumberInput from '../Screens/PhoneInput/PhoneInput';
import CreatePIN from '../Screens/CreatePIN';
import Otp from '../Screens/PhoneInput/OTP';
import Gated from '../Screens/PhoneInput/Gated';
import CreatingAccount from '../Screens/Accounts/CreatingAccount';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountSelector from '../Screens/Accounts/HaveAccount';
import ViewAccount from '../Screens/Accounts/ViewAccount';
import Creating from '../Screens/Accounts/Creating'; 
import PinAuth from '../Screens/Auth/PinAuth';
import AccountName from '../Screens/Accounts/AccountName';
import HasAccountWelcome from '../Screens/HasAccountWelcome';
import WelcomeBack from '../Screens/WelcomeBack';

const Stack = createNativeStackNavigator();

export default function AppStack(){
    const [ShowSignUp, setShowSignUp] = useState(true);

    const CheckForAccountItems = async ()=>{
        try{
            const inserted = await CheckInsertedData();
            if(inserted){
                setShowSignUp(false)
                console.log(inserted)
                console.log("SIGNUP",ShowSignUp)
            }
        }catch(err){
            console.error(err);
        }
        }

        useEffect(()=>{
            CheckForAccountItems();
        },[])


    return (
        ///* <Stack.Screen name="ViewAccount" component={ViewAccount}/>
<Stack.Navigator>
    
{/*ShowSignUp ? <Stack.Screen name="Welcome" component={Welcome}/> : <Stack.Screen name="HasAccountWelcome" component={HasAccountWelcome}/>*/}
<Stack.Screen name="CreatePIN" component={CreatePIN}/>
<Stack.Screen name="WelcomeBack" component={WelcomeBack}/>
<Stack.Screen name="PhoneNumberInput" component={PhoneNumberInput}/>
<Stack.Screen name="Otp" component={Otp}/>
<Stack.Screen name="Gated" component={Gated}/>

<Stack.Screen name="CreatingAccount" component={CreatingAccount}/>
<Stack.Screen name="AccountName" component={AccountName}/>
<Stack.Screen name="AccountSelector" component={AccountSelector}/>
<Stack.Screen name="Creating" component={Creating}/>
<Stack.Screen name="ViewAccount" component={ViewAccount}/>
<Stack.Screen name="PinAuth" component={PinAuth}/>


</Stack.Navigator>
    )
}
