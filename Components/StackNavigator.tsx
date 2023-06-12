import React, { useState,useEffect } from 'react';
import {CheckInsertedData} from '../util/SQLiteconn.js';
import Welcome from '../Screens/welcome.js';
import PhoneNumberInput from '../Screens/PhoneInput/PhoneInput.jsx';
import CreatePIN from '../Screens/CreatePIN.js';
import Otp from '../Screens/PhoneInput/OTP.jsx';
import Gated from '../Screens/PhoneInput/Gated.jsx';
import CreatingAccount from '../Screens/Accounts/CreatingAccount.jsx';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountSelector from '../Screens/Accounts/HaveAccount.jsx';
import ViewAccount from '../Screens/Accounts/ViewAccount.js';
import Creating from '../Screens/Accounts/Creating.js'; 
import PinAuth from '../Screens/Auth/PinAuth.js';
import AccountName from '../Screens/Accounts/AccountName.js';
import HasAccountWelcome from '../Screens/HasAccountWelcome.js';
import WelcomeBack from '../Screens/WelcomeBack.js';
import Select from '../Screens/Select.js';
import SelectNetwork from '../Screens/Select.js';

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
<Stack.Screen name="Select" component={Select}/>
<Stack.Screen name="CreatePIN" component={CreatePIN}/>
<Stack.Screen name="Welcome" component={Welcome}/>
{ShowSignUp ? console.log('nothing') : <Stack.Screen name="HasAccountWelcome" component={HasAccountWelcome}/>}

<Stack.Screen name="WelcomeBack" component={WelcomeBack}/>

<Stack.Screen name="PhoneNumberInput" component={PhoneNumberInput}/>
<Stack.Screen name="Otp" component={Otp}/>
<Stack.Screen name="Gated" component={Gated}/>
<Stack.Screen name="SelectNetwork" component={SelectNetwork}/>
<Stack.Screen name="CreatingAccount" component={CreatingAccount}/>
<Stack.Screen name="AccountName" component={AccountName}/>
<Stack.Screen name="AccountSelector" component={AccountSelector}/>
<Stack.Screen name="Creating" component={Creating}/>
<Stack.Screen name="ViewAccount" component={ViewAccount}/>
<Stack.Screen name="PinAuth" component={PinAuth}/>


</Stack.Navigator>
    )
}
 