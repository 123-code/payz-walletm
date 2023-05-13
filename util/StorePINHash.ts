
import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabase('pindatabase.db');

export async function StorePinHash(pinhash: string) {
    try{
        db.transaction(async(tx)=>{
            tx.executeSql(
                'CREATE TABLE IF NOT EXISTS pin (id INTEGER PRIMARY KEY AUTOINCREMENT, pinhash TEXT)'
            );
            tx.executeSql(
                `INSERT INTO pin(pinhash) VALUES('${pinhash}')`
            );
            console.log('success');
        });
    }catch(err){
        console.error(err)
    }
    }
