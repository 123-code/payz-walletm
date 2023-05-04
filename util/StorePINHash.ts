import bcrypt from "bcrypt"
import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabase('pindatabase.db');


    export async function StorePinHash(pin: string) {
    function EncryptPIN(){
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(pin, salt);
        return hash
    }
    try{
        const pinhash = EncryptPIN();
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