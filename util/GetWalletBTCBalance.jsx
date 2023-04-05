import { balance } from 'balance-crypto'
import fetch from 'node-fetch'


export async function GetWalletBTCBalance({address}){
    balance('3PxedDftWBXujWtr7TbWQSiYTsZJoMD8K5', 'BTC', {
        keys: {
          etherscan: process.env.ETHERSCAN_KEY,
          blockcypher: process.env.BLOCKYCPHER_KEY
        },
        verbose: true
      }).then((res) => console.log(res))
}