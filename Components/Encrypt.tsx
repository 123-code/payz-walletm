let CryptoJS = require('crypto-js');

export const Encrypt = (password:any,pkey:any)=>{
    let ciphertext = CryptoJS.AES.encrypt(password, pkey);
    return ciphertext.toString();
}




const Decrypt = (password:any,pkey:any)=>{
    let bytes = CryptoJS.AES.decrypt(password,pkey);
    let str = false;
    try{
    str = bytes.toString(CryptoJS.enc.Utf8);
    }catch(err){
        console.error(err);
    }
    return str;

}