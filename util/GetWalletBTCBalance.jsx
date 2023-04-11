const BTCEndpointURL = "https://btc.getblock.io/a04435a5-0be8-4c8b-aec5-8e0be40c0be9/mainnet/"
const testbalanceURL = "https://blockstream.info/api/address/"
export async function GetWalletBTCBalance(account){
  try{
    console.log(account)
    const walletaddress = await fetch(`${testbalanceURL}${account}`)
    const walletbalance = await walletaddress.json()
    console.log("WALLET BALANCE:",walletbalance.chain_stats.funded_txo_count)
    return walletbalance
  }catch(err){console.error(err)}
  
//getbalances
}