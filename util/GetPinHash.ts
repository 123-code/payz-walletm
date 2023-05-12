import { Base64 } from 'js-base64';

export const encryptPassword = async (numbers:any)=>{
  try{
    const encode = Base64.encode(JSON.stringify(numbers));
    console.log("ENCODED:",encode); 
    const decode = Base64.decode(encode);
    console.log(decode); 
  }catch(err){
    console.log(err);
  }
};