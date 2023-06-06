import { RpcRelayer } from '@0xsequence/relayer'
import { Wallet } from '@0xsequence/wallet'
import { ethers } from 'ethers'
import dotenv from 'dotenv';
dotenv.config();

export default  async function Realayer(){
    const provider = new ethers.providers.JsonRpcProvider('https://nodes.sequence.app/polygon')
const walletEOA = new ethers.Wallet(process.env.SERVER_EOA_PRIVATE_KEY, provider)

//relayer RPC
const relayer = new RpcRelayer({url: 'https://polygon-relayer.sequence.app', provider: provider})
const wallet = (await Wallet.singleOwner(walletEOA)).connect(provider, relayer)


return wallet
}

