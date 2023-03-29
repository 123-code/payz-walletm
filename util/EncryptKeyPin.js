import BcryptReactNative from 'bcrypt-react-native';
import { generateSecureRandom } from 'react-native-securerandom';
import Aes from 'react-native-aes-crypto';




export function EncryptValues(pkey,pin){
    try{
        // encrypt values using AES
        const key = generateSecureRandom(32);
        text = pkey + pin;
        return Aes.randomKey(32).then(iv => {
            return Aes.encrypt(text,key,iv,'aes-256-cbc').then(cipher=>({
                cipher,
                iv,
            }))
        })

        const salt = BcryptReactNative.getSalt(10);
        const hash = BcryptReactNative.hash(salt,pkey);
       // const is

    }
    catch(err){
        console.error(err);
    }
}