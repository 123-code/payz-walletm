import { generateMnemonic, generateWallet } from '@coingrig/wallet-generator';

// Generate mnemonic
const words = 12; // or 24
const mnemonic = await generateMnemonic(words);

// Generate wallet
const chain = 'BTC' // or ETH
let wallet = await generateWallet(mnemonic, chain);
wallet = JSON.parse(wallet);
console.log(wallet.address, wallet.privateKey);