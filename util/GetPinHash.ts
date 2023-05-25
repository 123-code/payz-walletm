import { Base64 } from 'js-base64';
import { StorePinHash } from '../util/StorePINHash';

export const encryptPassword = async (numbers:any)=>{
  try{
    const encode = Base64.encode(JSON.stringify(numbers));
    console.log("ENCODED:",encode); 
    return encode;
    /*
    const decode = Base64.decode(encode);
    console.log(decode); */
  }catch(err){
    console.log(err);
  }
};


export const SaveEncryptedPIN = async (numbers:any)=>{
  try{
    
    const encoded = Base64.encode(JSON.stringify(numbers));
    console.log("ENCODED:",encoded); 
    //TODO DELETE THIS!!!
    const decoded = JSON.parse(Base64.decode(encoded));
    console.log("DECODED",decoded)
    await StorePinHash(encoded);
  }catch(err){
    console.error(err);
  }
}

