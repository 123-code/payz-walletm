
import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabase('ETHkeys.db');

export async function StoreETHKeys(pkey: string) {
    try{
        db.transaction(async(tx)=>{
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS ethkeys (id INTEGER PRIMARY KEY AUTOINCREMENT, key TEXT)'
            );
            tx.executeSql(
                `INSERT INTO ethkeys(pkey) VALUES('${pkey}')`
            );
            console.log('success');  
        });
    }catch(err){
        console.error(err)
    }
    }


    export const GetPrivateKey = async (): Promise<string | null> => {
        return new Promise((resolve, reject) => {
          db.transaction((tx) => {
            tx.executeSql(
              'SELECT * FROM  pkeys ',
              [],
              (_, result) => {
                if (result.rows.length > 0) {
                  const keyhash = result.rows.item(0).keyhash;
                  console.log(keyhash);
                  resolve(keyhash);
                } else {
                  resolve(null); // Return null if no key found
                }
              },
              (_, error) => { // Specify the type of 'error' parameter
                reject(error);
                return false; // Return false to satisfy the type signature
              }
            );
          });
        });
      };
      
      
