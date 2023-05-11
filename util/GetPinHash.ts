/*import bcrypt from "bcryptjs";
import * as SQLite from 'expo-sqlite';


export const db = SQLite.openDatabase('pindatabase.db');

export function CompareHashes (inputted:string):Promise<string> {
    return new Promise<string> ((resolve,reject)=>{
        const GetInsertedHash = async()=>{
     // TODO Check code below
            db.transaction(async(tx)=>{
                const query = tx.executeSql(
                    'SELECT * FROM pin',[],
                    (tx,results)=>{
                        const hashes = [];
                        const rows = results.rows;
                        for(let i=0;i<rows.length;i++){
                            hashes.push(rows.item(i).pinhash)
                        }
                        console.log("HASHES:",hashes)
                    }

                    
                );
            
                
            });
            
        }
        //const equals = bcrypt.compareSync(inputted, hash)
    })
  
    }
*/