import React, { useState } from 'react';
import crypto from 'react-native-crypto';
// Import the `hexStringToUint8Array` utility function
//import { hexStringToUint8Array } from 'js-crypto-utils';

// Define the `generateKeys` function
export const GenerateKeys = async () => {
    const keyPair = await crypto.generateKeyPair('ec', { namedCurve: 'P-256' });
    const publicKeyData = await crypto.exportKey('spki', keyPair.publicKey);
    console.log(publicKeyData);
}