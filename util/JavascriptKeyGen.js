import { generateMnemonic, generateWallet } from '@coingrig/wallet-generator';


export async function GenerateWallet(){
// Generate mnemonic
const words = 12; // or 24
const mnemonic = await generateMnemonic(words);

// Generate wallet
const chain = 'BTC' // or ETH
let wallet = await generateWallet(mnemonic, chain);
wallet = JSON.parse(wallet);
console.log(JSON.stringify(wallet.address))
//const AccountInfo = {wallet.address,wallet.privateKey}
return JSON.stringify(wallet.address)
}
