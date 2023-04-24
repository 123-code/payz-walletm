import * as SQLite from 'expo-sqlite';

export const db = SQLite.openDatabase('mydatabase.db');

export async function CreateDetailsTable(){
   try{
    db.transaction(async (tx) => {
         tx.executeSql(
          'CREATE TABLE IF NOT EXISTS details (id INTEGER PRIMARY KEY AUTOINCREMENT, accname TEXT)'
        );
          console.log('success');
        });
   }catch(err){
      console.error(err)
   }

}

export async function StoreAccountName(name: any){
    try{
        db.transaction(async (tx) => {
            tx.executeSql(
             `INSERT INTO details(accname) VALUES('${name}')`
           ),[];
             console.log('success');
           });
    }catch(err){
        console.error(err)
    }

}